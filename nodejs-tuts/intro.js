console.log("Hello world");
// GLOBALS - no window

// __dirnamr - path to current directory
console.log("directory name", __dirname);
// __filename - file name
console.log("file name", __filename);
// module - info about current module
const secretKey = "THIS IS A SECRET KEY";
module.exports = { secretKey };
console.log("module", module);
// require - funtion to use modules
// process - info about env
