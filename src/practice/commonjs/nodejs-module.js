// let exports = {};
// exports = 'abc'

// const module = {
//   exports: {},
// };
// let exports = module.exports;

// exports = add;
// module.exports = add;

// const evaluated = eval(
//   "(function () {const a = 1+2; console.log(a); return a;})()"
// );
// console.log(evaluated);

function add(num1, num2) {
  return num1 + num2;
}

// console.log("from node module", exports);

// let originalExports = exports;
// exports = add;
// originalExports.myFunction = add;
// exports.add = add;
// console.log(exports);
// console.log(module.exports);
module.exports = add;
