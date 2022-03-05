break关键字可以用来退出switch或循环语句

if没有break关键字，f（true）》》》不是循环

break关键字,会立即终止离他最近的那个循环语句



可以为循环语句创建一个label,来标识当前的循环

label :循环语句

使用breakia时, 可以在break后跟着—个label,

​		这样break将会结束指定的循环，而不是最近的

```
outer:
	for(var i=e; i<5 ; i++){
		console.log ("@外层循环"+i)
		for(var j-e ; j<5; j++){ 
			break outer；
			lconsole.1og("内层循环:"+j);
		}
	}
```

----

---------

continue关键字可以用来跳过当次循环

同样continue也是默认只会对离他最近的循环循环起作用

用法跟break一样，也可以跟着—个label,





栈<<<---------------------------->>>堆

普通存储						对象存储

1										obj

2										obj

123									obj
