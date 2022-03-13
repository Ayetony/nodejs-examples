const fs = require("fs");

fs.appendFile("Message.txt", "data to append", "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("The data appended");
});
