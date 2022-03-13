const fs = require("fs");

/**
 *
 * r 读取模式，不存在则错误
 * r+ 读写模式，不存在则错误
 * rs 同步读
 * rs+ 同步读写
 * w 写入模式，不存在就创建
 * w+ 读写模式，不存在就创建
 *
 * wx 写模式，如果文件存在则写入失败
 * wx+ 读写模式，文件存在则读写失败
 *
 * a 追加模式打开，不存在就创建
 * a+ 如果文件存在读写失败
 *
 * **/

console.log("打开文件");
fs.open("/tmp/hello", "r+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("成功打开文件");
});
