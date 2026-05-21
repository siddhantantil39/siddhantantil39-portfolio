---
title: 'Pipe for functions in JS'
date: '2026-03-29'
---

```js
/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
		return function (input){
			let res = input;
			for(let fn of funcs){
				res = fn(res);
			}

			return res;
		}
}
```
