const { readFileSync, writeFileSync } = require("fs");

const file = readFileSync("./assets/test.txt", "utf8");
console.log(file);

writeFileSync(
  "./assets/result-sync.txt",
  `This is the result of:  ${file}`
  //   { flag: "a" } //This is used to append data to file, without this it will overwrite
);
