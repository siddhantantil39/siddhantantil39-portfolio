---
title: 'LC:1557:minimum-number-of-vertices-to-reach-all-nodes Indegree based solution'
date:  '2026-02-04'
---

# Approach 

Nodes that have incoming indegrees can be reached.
Nddes that have indegree as 0 cannot be reached via other nodes. Thus they are the ones we can use to reach other nodes.

```js
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let indegree = new Array(n).fill(0);

    for(let [s,e] of edges){
        indegree[e]+=1;
    };

    let res = [];
    for(let i=0;i<n;i++){
        if(indegree[i]==0) res.push(i)
    };

    return res;
};
```
