---
title: 'JS Heap Implementation'
date:  '2026-01-14'
---

# Approach 

Min Heap implementation in JS with comparator.

```js
  let heap = new MinHeap();

  class MinHeap{
    constructor(x){
        this.heap = [];
        this.x = x;
    };

    push(val){
        this.heap.push(val);
        this.bubbleUp(this.heap.length-1)
    };

    pop(){
        if(this.heap.length ==  1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    };

        bubbleUp(i){
        while(i>0){
            let parent = Math.floor((i-1)/2);
            if(this.compare(parent,i)) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    bubbleDown(i){
        while(true){
            let left = 2*i+1;
            let right = 2*i+2;
            let n = this.heap.length;
            let parent = i;

            if(left<n && !this.compare(parent,left)) parent = left;
            if(right<n && !this.compare(parent,right)) parent = right;
            if(i==parent) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    compare(i,j){
        let v1 = Math.abs(this.heap[i] - this.x);
        let v2 = Math.abs(this.heap[j] - this.x);

        return v1 < v2;
    }

    isEmpty(){
        return this.heap.length===0 ? true : false;
    }
}
```
