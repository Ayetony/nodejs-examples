console.time("total time");

for (let i = 0; i < 100; i++) {}

// 向 console.time() 传递统一参数后，timeEnd 匹配上后就可以在控制台看到代码运行时间
console.timeEnd("total time");

// 打印堆栈信息
console.trace("hello trace");
