const querystring = require("querystring");

let str = "keyword=node.js&name=huruji";

let obj = querystring.parse(str);

let jsonStr = {
  keyWord: "node.Js",
  mame: "huyuji",
};

// json 对象变成 url 字符串
console.log(querystring.stringify(jsonStr));

// 打印对应的 json 对象
console.log(obj);
