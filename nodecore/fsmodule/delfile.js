const fs = require("fs");

// 异步操作删除指定文件
function asyncDelFile() {
  fs.unlink("/tmp/hello", (err) => {
    if (err) throw err;
    console.log("successfully deleted hello log file");
  });
}

// 同步操作
fs.unlinkSync("/tmp/hello");
console.log("sync successfully deleted hello log file");
