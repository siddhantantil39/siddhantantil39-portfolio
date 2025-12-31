---
title: 'Background Retry worker'
date: '2025-12-30'
---

# MongoDB Retry Worker using BackgroundService (.NET)


This retry worker runs as a **.NET BackgroundService** and periodically retries MongoDB records that:

Have `Status = Failed`, OR
Have `Status = InProgress` but are **stuck**, identified by `LockTS` older than the average execution time

MongoDB `findOneAndUpdate` is used to **atomically lock and retry** records.


## Implementation 

```csharp
public class JobRecord
{
    public ObjectId Id { get; set; }
    public string Status { get; set; }
    public DateTime LockTS { get; set; }
    public int RetryCount { get; set; }
}

```

This is the background retry worker that runs continuously.

```csharp
public class RetryWorker : BackgroundService
{
    private readonly IMongoCollection<JobRecord> _collection;

    private readonly TimeSpan _pollInterval = TimeSpan.FromSeconds(30);
    private readonly TimeSpan _avgRunTime = TimeSpan.FromMinutes(5);

    public RetryWorker(IMongoDatabase database)
    {
        _collection = database.GetCollection<JobRecord>("jobs");
    }

    protected override async Task ExecuteAsync(
        CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            await RetryOnceAsync(stoppingToken);
            await Task.Delay(_pollInterval, stoppingToken);
        }
    }
}
```
And then the `RetryOnceAsync` runs something like this:
```csharp
private async Task RetryOnceAsync(CancellationToken token)
{
    // 1. Try to acquire a failed or stuck job
    var claimedJob = await ClaimJobRecordAsync(token);
    if (claimedJob == null) return;

    try
    {
        await ProcessJobAsync(claimedJob, token);
        await MarkJobCompletedAsync(claimedJob, token);
    }
    catch (Exception)
    {
        await MarkJobFailedAsync(claimedJob, token);
    }
}
```


