const dns = require("dns");

let domain = "wwww.baidu.com";

// 返回第一个被发香的 ipv4 or ipv6
dns.lookup(domain, function (err, address) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(address);
});
