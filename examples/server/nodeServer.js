/**
 *
 * http server with html
 *
 * **/

const http = require("http");
const fs = require("fs");
const mime = require("./mime");
const path = require("path");
const url = require("url");

// if you dont understand http protocol ,you can learn something about HTTP, then you can handle server dev fast.
const httpServer = http.createServer(function (request, response) {
  // using request to get urlpath property
  let filePath = "." + url.parse(request.url).pathname;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  // check the file's existing
  fs.exists(filePath, function (existing) {
    if (existing) {
      /**
       * do the job
       *
       * ***/
      response.writeHead(200, {
        "content-type": "text/html",
      });
      // prepare html
      let data = fs.readFileSync("index.html");

      // write htmlData for client
      response.write(data);
      response.end("hello, nodeJs ended!");
    } else {
      // else tell the user error info
      response.writeHead(200, {
        "content-type": "text/html",
      });

      // data of end event
      response.end(
        "<p style='color: red'>The url you request doest exist.</p>"
      );
    }
  });
});

const PORT = 9100;

httpServer.listen(PORT, function () {
  console.log("listening port - ", PORT);
});

// run this server ,check url : http://localhost:9100/
