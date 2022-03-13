const http = require("http");

let data = "";

const option = {
  host: "192.168.124.20",
  port: "3000",
};

// http get or http requestss
http
  .get(option, function (res) {
    res.on("data", function (chunk) {
      data += chunk;
    });
    res.on("end", function () {
      console.log(data);
    });
  })
  .end();
