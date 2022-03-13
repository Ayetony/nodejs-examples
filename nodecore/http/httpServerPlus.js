const http = require("http");

function toString(objArr) {
  let stringByArr = "";
  console.log(objArr);
  for (let element in objArr) {
    stringByArr += element + ": " + objArr[element] + "<br/>";
  }
  return stringByArr;
}

const server = http.createServer(function (req, res) {
  let data = "";
  req.on("data", function (chunk) {
    data += chunk;
  });
  req.on("end", function () {
    let method = req.method;
    let url = req.url;
    let headers = req.headers;
    let httpVersion = req.httpVersion;
    res.writeHead(200, {
      "content-type": "text/html",
    });
    let dataHtml = "<p> data:" + data + "</p>";
    let methodHtml = "<p> method: " + method + "</p>";
    let httpVersionHtml = "<p> httpVersion: " + httpVersion + "</p>";
    let headersHtml = "<p> headers: " + toString(headers) + "</p>";

    let resData = dataHtml + methodHtml + httpVersionHtml + headersHtml;
    res.end(resData);
  });
});

const os = require("os");

const localHost = os.networkInterfaces().en5[1].address;

server.listen(3000, localHost, function () {
  console.log("listening on " + localHost + ":" + 3000);
});
