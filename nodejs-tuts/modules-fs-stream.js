const { createReadStream } = require("fs");

const stream = createReadStream("./assets/big.txt", {
  encoding: "utf8",
});

//default 64kb
//last buffer - remainder
//highWaterMark - control size of buffer
// const stream = createReadStream("./assets/big.txt",{highWaterMark:90000});
// const stream = createReadStream("./assets/big.txt",{encoding:"utf8"});

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));

//code for creating big text
// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./assets/big.txt", `hello world ${i}\n`, { flag: "a" });
// }
