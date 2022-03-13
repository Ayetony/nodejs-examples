let httpDemo = require("http");
let queryString = require("querystring");
const { start } = require("repl");

httpDemo.start = () => {
  httpDemo
    .createServer(function (req, res) {
      let postData = "";
      req.setEncoding("utf8");
      req.on("data", function (trunk) {
        postData += trunk;
      });
      req.on("end", function () {
        res.end(postData);
      });
    })
    .listen(8090);
  console.log("服务器已启动 ----------【success】");
};

module.exports = httpDemo;
