const fs = require("fs");
console.log(
  fs.stat("/tmp/hello", function (err, stats) {
    console.log(stats);
    console.log("is file => ", stats.isFile());
    console.log("is directory => ", stats.isDirectory());
  })
);
// Callback must be a function

// console.log(fileStatus);
