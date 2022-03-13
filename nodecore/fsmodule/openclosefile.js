const fs = require("fs");

console.log("打开文件");

fs.open("/tmp/hello", "r+", function (err, fd) {
  if (err) {
    return console.error(err, fd);
  }
  console.log("打开文件成功");
  fs.close(fd, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("文件关闭成功");
  });
});
// 并不需要经常使用 fs.close 来关闭文件，出了集中特例之外 nodeJs 在进程退出之后将自动把所有文件关闭
fs.writeFileSync("/tmp/node.log", "abc");
