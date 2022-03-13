const net = require("net");
// tcp 客户端连接
const client = new net.Socket();

// 向服务器发送数据
client.connect(1800, "localhost", function () {
  console.log("connect to server");
  client.write("message from client");
});

// 获取服务器发送的数据, 监听 data 事件
client.on("data", function (data) {
  console.log("the data of server is : " + data.toString());
});

//监听 end 断开事件
client.on("end", function () {
  console.log("data ended");
});
