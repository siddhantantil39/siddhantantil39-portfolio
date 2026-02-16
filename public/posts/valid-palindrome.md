---
title: 'Leetcode 680: Valid Palindrome II'
date:  '2026-02-16'
---

# Approach 

Shrink inwards checking if palindrome.
If yes shrink more.
If not check skipping one on the left and once on the right. 
(left+1,right) || (left, right-1)
if exists palindrome return true, else false.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;

    while(left<=right){
        if(s[left]!=s[right]){
            if(!isPalindrome(s,left+1,right) && !isPalindrome(s,left,right-1)) return false;
            return true;
        }
        left+=1
        right-=1;
    }

    return true;
};

function isPalindrome(s, left, right){
    while(left<=right){
        if(s[left]!=s[right]) return false;
        left+=1;
        right-=1;
    };

    return true;
}
```
