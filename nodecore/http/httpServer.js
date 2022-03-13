const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "content-type": "text/plain",
  });
  res.end("hello nodeJs http");
});

server.listen(3000, function () {
  console.log("listening on 3000");
});
