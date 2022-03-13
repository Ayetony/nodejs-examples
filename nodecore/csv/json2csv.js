// if you dont understand those modules , just download via npm : npm install iconv-lite fs-extra json2csv
const iconv = require("iconv-lite");
const { Parser } = require("json2csv");
const json2csv = require("json2csv");
const fs = require("fs-extra");

const labels = [
  {
    label: "编号",
    value: "id",
  },
  {
    label: "名称",
    value: "name",
  },
];

const data = [
  {
    id: "csv001",
    name: "hello kitty",
  },
  {
    id: "csv0011",
    name: "hello kitty1",
  },
  {
    id: "csv0012",
    name: "hello kitty2 你们的生活",
  },
];

const json2csvParser = new Parser({ labels });
const csv = json2csvParser.parse(data);

// 编码
let csvbuf = new Buffer(csv); // buffer deprecated
// let str = iconv.decode(csvbuf, "utf-8");
// let str2 = iconv.encode(str, "utf-8");

// console.log(str, str2);

const file = `records/${Date.now()}.csv`;
fs.outputFileSync("./" + file, csvbuf);
