const allImports = require("./all-exports");
const anotherImports = require("./another-exports");
console.log(allImports);

allImports.SayMyName();

console.log(anotherImports);

const add = require("./nodejs-module");
console.log(add);
