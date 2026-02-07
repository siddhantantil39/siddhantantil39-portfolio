---
title: 'Leetcode 1653: Minimum Deletions to make string balanced'
date:  '2026-02-08'
---

# Approach
Precompute prefix counts of 'b' to know how many 'b's must be deleted on the left of any split.

Precompute suffix counts of 'a' to know how many 'a's must be deleted on the right of any split.

Try every split point and minimize left b-deletions + right a-deletions.

```js
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let n = s.length;
    let prevBtoBeDeleted = new Array(n).fill(0);
    let nextAtoBeDeleted = new Array(n).fill(0);

    prevBtoBeDeleted[0] = s[0] === 'b' ? 1 : 0;
    nextAtoBeDeleted[n-1] = s[n-1] === 'a' ? 1 :0;

    for(let i=1;i<n;i++){
        prevBtoBeDeleted[i] = prevBtoBeDeleted[i-1] + (s[i] === 'b' ? 1 : 0);
    };

    for(let i=n-2;i>=0;i--){
        nextAtoBeDeleted[i] = nextAtoBeDeleted[i+1] + (s[i] === 'a' ? 1 : 0);
    };

    let min = Infinity;
    for(let i=0;i<n;i++){
        let prev = i === 0 ? 0 : prevBtoBeDeleted[i-1];
        let next = i === n - 1 ? 0 : nextAtoBeDeleted[i+1];

        let val = prev + next;
        min = Math.min(min, val);
    }

    return min;
};
```
