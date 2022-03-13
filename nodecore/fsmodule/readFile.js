const fs = require("fs");

fs.open("/tmp/node.log", "r", function (err, fd) {
  let readBuffer = Buffer.alloc(1024);
  (offset = 0), (len = readBuffer.length - 1), (filePosition = 0); // file postion - 文件读取的起始位置 offset - 缓冲区内的偏移量（偏移则不存取）
  fs.read(fd, readBuffer, offset, len, filePosition, function (err, readByte) {
    console.log("读取数据总数 ：" + readByte + " bytes");
    console.log(readBuffer.slice(0, readByte).toString());
  });
});
