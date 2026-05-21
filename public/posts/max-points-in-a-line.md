---
title: 'Leetcode 149: Max points in a line'
date: '2026-01-18'
---

# Approach

y = mx + b is not needed because only slope comparison is required.
Each point is fixed once and compared with all remaining points.
Parallel lines are automatically separated since they have the same slope but different anchors.
Line counts are found while iterating over all point pairs keeping one point as anchor.
The solution works in O(n²) time by checking every pair.

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
    let n = points.length;
    let maxCount = 0;

    for(let i=0;i<n;i++){
       let map = new Map();
       let [x1,y1] = points[i];
       for(let j=i+1;j<n;j++){
        let slope;
        let [x2,y2] = points[j];
        if(x1==x2) slope = Infinity;
        else if(y1==y2) slope = 0;
        else slope = Slope(x1,x2,y1,y2);
        
        // map[slope] = (map[slope] ?? 0) + 1;
        if (map.has(slope)) {
            map.set(slope, map.get(slope) + 1);
        } 
        else map.set(slope, 1);
        
        maxCount = Math.max(maxCount, map.get(slope));
       }
    }

    return maxCount+1;
};

function Slope(x1,x2,y1,y2){
    return  ((y2-y1)/(x2-x1));
}
```
