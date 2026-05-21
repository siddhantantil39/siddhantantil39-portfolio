---
title: 'Leetcode 3115: Maximum prime difference'
date:  '2026-03-07'
---

# Approach
Generate all prime numbers up to the maximum value in nums using the Sieve of Eratosthenes, and store them in a Set for quick lookup.

Find the first prime index from the left and the first prime index from the right in the array.

Return the absolute difference between these two indices, which gives the maximum distance between prime elements.


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
    let n = nums.length;

    let max = Math.max(...nums);

    let sieve = getSieve(max);
    let set = new Set(sieve);
    
    let i = 0;
    let j = n-1;

    while(i<n){
        if(set.has(nums[i])) break;
        i+=1;
    };

    while(j>=0){
        if(set.has(nums[j])) break;
        j-=1;
    }

    return Math.abs(j-i)
};

function getSieve(n){
    let res = new Array(n+1).fill(true);
    res[0] = false;
    res[1] = false;

    for(let i=2;i<=Math.sqrt(n);i++){
        if(res[i]==true){
            let x = 2*i;
            while(x<=n){
                res[x] = false;
                x+=i;
            }
        }
    }

    let p = [];
    for(let i=0;i<n+1;i++){
        if(res[i]==true) p.push(i)
    };

    return p;
}
```
