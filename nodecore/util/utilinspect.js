const util = require("util");

let obj = {
  keyword: "nodeJs",
  name: "huruji",
};

let str = util.inspect(obj, {
  color: true,
});

console.log(str);
