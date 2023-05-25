// const { readFile, writeFile } = require("fs");

// readFile("./assets/test.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const test = result;
//   writeFile(
//     "./assets/result-async.txt",
//     `This is the result of : ${test}`,
//     (err, res) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(res);
//     }
//   );
// });

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const test = await readFile("./assets/test.txt", "utf8");

    await writeFile(
      "./assets/result-async.txt",
      `This is the result of ${test}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
