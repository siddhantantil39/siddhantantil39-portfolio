---
title: 'JS Heap Implementation'
date:  '2026-01-14'
---

# Approach 

Min Heap implentation in JS.

```js
  let heap = new MinHeap();

  class MinHeap{
    constructor(){
        this.heap = [];
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
            if(this.heap[parent] < this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    bubbleDown(i){
        while(true){
            let n = this.heap.length;
            let left = 2*i+1;
            let right = 2*i+2;
            let parent = i;
            if(left < n && this.heap[parent] > this.heap[left]) parent = left;
            if(right < n && this.heap[parent] > this.heap[right]) parent = right;
            if(parent==i) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    isEmpty(){
        return this.heap.length===0 ? true : false;
    }
}
```
