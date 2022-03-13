const url = require("url");

let parseUrl = "http://wwww.google.com/?q=node";

let urlObj = url.parse(parseUrl);
console.log(urlObj);

let urlNewObj = {
  host: "www.google.com",
  port: 80,
  protocol: "https",
  search: "?q=node.js",
  //   query: "q=node.js",
  path: "/",
};

let urlAddr = url.format(urlNewObj);
console.log(urlAddr);

let googleUrl = url.resolve("https://wwww.google.com", "/image");
console.log(googleUrl);
