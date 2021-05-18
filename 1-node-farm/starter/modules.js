// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module-1');
const calc1 = new C();
console.log("calc1", calc1.add(2, 5));

const calc2 = require('./test-module-2');
const {add, multiply} = require('./test-module-2');
console.log("calc2", calc2.add(2,5))
console.log("add", add(2,5))
console.log("multiply", multiply(2,5))

// require('./test-module-3')
require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()