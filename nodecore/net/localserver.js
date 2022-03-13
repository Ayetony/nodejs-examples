const net = require("net");

const server = net.createServer(function (socket) {
  console.log("someone connects", server.address());
  let message = "";
  let received = false;
  // 接收客户端的数据
  socket.on("data", function (data) {
    message = data.toString();
    console.log(message, socket.localPort, socket.localAddress);
    received = true;
    // 发送数据给客户端
    if (received) {
      socket.write(message + " from server", function () {
        let size = socket.bytesWritten;
        console.log(message + " has send");
        console.log("message size is: " + size);
        received = false;
      });
    }
  });

  console.log(server.address);
  server.getConnections(function (err, count) {
    console.log("the count of client is :" + count);
  });
});

server.listen(1800, function () {
  server.maxConnections = 10;
  console.log("listen on 1800 : http://localhost:1800");
});
