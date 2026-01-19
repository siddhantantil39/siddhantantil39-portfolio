---
title: 'Leetcode 365: Water and Jug'
date:  '2026-01-20'
---

# Approach 

We store sum of x and y as states.
So states can be [x,-x,y,-y] for both jugs as they can either lose or hold all water. A jug can either lose all x water as '-x' or gain 'x' water, 
similarly if it is smaller in quantity it can gain 'y' water and to empty it lose '-y' water.

```js
/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    let cache = new Set();
    let steps = [x, -x, y, -y];
    cache.add(0);

    function bfs(source){
        let q = [];
        q.push(source);

        while(q.length){
            let val = q.shift();
            if(val===target) return true;
            for(let step of steps){
                let sum  = val;
                sum+=step;
                if(sum >= 0 && sum <= x + y && !cache.has(sum)) {
                    cache.add(sum);
                    q.push(sum);
                }
            }
        }

        return false;
    }

    return bfs(0);
};
```
