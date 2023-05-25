const path = require("path");

console.log(path.sep);

const filePath = path.join("/assets", "test.tsx");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.join(__dirname, "/assets", "test.tsx");
console.log(absolute);
