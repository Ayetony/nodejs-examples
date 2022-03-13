const fs = require("fs");

//同步查询文件信息
function syncRename() {
  fs.rename("/tmp/hello5.js", "/tmp/hello.js", (err) => {
    if (err) throw err;
    console.log("renamed");
  });

  fs.stat("/tmp/hello.js", (err, stats) => {
    if (err) throw err;
    // 点号表达式
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
}

// 异步查询 stats
fs.rename("/tmp/hello.js", "/tmp/hello", (err) => {
  if (err) throw err;
  fs.stat("/tmp/hello", (err, stats) => {
    if (err) throw err;
    console.log(`states here : ${JSON.stringify(stats)}`);
  });
});
