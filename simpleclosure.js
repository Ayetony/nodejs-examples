function cmethod() {
  let str = "node js";
  return function () {
    let str2 = str + " ispowerful";
    return str2;
  };
}
// 闭包可以让函数度渠道其他函数内部的变量
console.log(cmethod()());
