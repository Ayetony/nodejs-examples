let str = "node.js";

function copy() {
  str2 = str;
  console.log(str);
}

copy();
// 如果变量不适用 var 定义好，就会跃升成为一个 global 变量（全局）
console.log(str2);
