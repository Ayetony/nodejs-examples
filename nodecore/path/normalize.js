const path = require("path");
// 规范化路径字符串
console.log(path.normalize("/path/hello/ye/qui/.."));

console.log(path.join("/foo", "/bar", "quix", ".."));

//相对路径的关系判断
console.log(path.relative("hello/yes", "yes"));
