const csv = require("csv");

let generator = csv.generate({ seed: 1, columns: 2, length: 20 });
let parser = csv.parse();

let transformer = csv.transform(function (data) {
  return data.map(function (value) {
    return value.toUpperCase();
  });
});

let stringifier = csv.stringify();

// 生成标注你的 csv 文件
generator.on("readable", function () {
  while ((data = generator.read())) {
    parser.write(data);
  }
});

// 解析生成 csv 文件
parser.on("readable", function () {
  while ((data = parser.read())) {
    transformer.write(data);
  }
});

// csv 转化为 txt
transformer.on("readable", function () {
  while ((data = transformer.read())) {
    stringifier.write(data);
  }
});

// 打印 csv 文本
stringifier.on("readable", function () {
  while ((data = stringifier.read())) {
    process.stdout.write(data);
  }
});
