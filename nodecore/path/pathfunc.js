const path = require("path");

let outputpath = path.join(__dirname, "node", "nodejs");
console.log(outputpath);

let pathStr = "C://frontend/node/nodejs/";
// 路径字符串转换成对象
let obj = path.parse(pathStr);
console.log(obj);

console.log(path.join(__dirname, ".").replace("path", ""));
