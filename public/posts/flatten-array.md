---
title: 'Leetcode: 2625 => Flatten Array by level < n'
date: '2026-03-16'
---

```js
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n, level=0) {
    let res = [];

    for(let ele of arr){
        if(Array.isArray(ele)){
            let val = flat(ele, n, level+1)
            if(level < n){
                res.push(...val);
            }
            else res.push(val)
        }
        else res.push(ele)
    };

    return res;
};
```
