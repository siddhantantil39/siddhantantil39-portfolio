---
title: 'Sliding Window Shrink and Expand'
date:  '2026-02-02'
---

# Approach 
Sliding window for Leetcode 1004

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let n = nums.length;
    let maxLen = 0;

    let zero = 0;

    for(let i=0,j=0;j<n;j++){
        if(nums[j]==0) zero+=1;

        while(zero > k){
            if(nums[i]===0){
                zero-=1
            }
            i+=1;
        }

        maxLen = Math.max(maxLen, j-i+1);
    };


    return maxLen;
};
```
