---
title: 'Leetcode: Count Covered Buildings'
date:  '2025-12-31'
---
# Approach 
A building at `(x, y)` is considered covered if there exists another building on both sides vertically in the same column and horizontally in the same row.

For each `x`, track the minimum and maximum `y`, and for each `y`, track the minimum and maximum `x`. A building is covered if it lies strictly within both its column and row ranges.


```js
/**
 * js implementation 
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
    let mapX = {};
    let mapY = {};

    for (let [x, y] of buildings) {
        if (!mapX[x]) mapX[x] = [y, y];
        else {
            let [minY, maxY] = mapX[x];
            mapX[x] = [Math.min(minY, y), Math.max(maxY, y)];
        }

        if (!mapY[y]) mapY[y] = [x, x];
        else {
            let [minX, maxX] = mapY[y];
            mapY[y] = [Math.min(minX, x), Math.max(maxX, x)];
        }
    }

    let count = 0;

    for (let [x, y] of buildings) {
        let [minY, maxY] = mapX[x];
        let [minX, maxX] = mapY[y];

        if (x > minX && x < maxX && y > minY && y < maxY) {
            count++;
        }
    }

    return count;
};
```
