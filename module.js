// when you import a module you actually invoke it
// when a function in another module is executed there
// testing.js
// const add = (a, b) => {
//     console.log(`the sum of a = ${a} and b = ${b} is ${a + b}`);
// };

// add(20, 5);

// requiring
// require('./testing');



// this is the module that we export
// let num = 20;
//
// module.exports = { num };

const names = require('./intro');

if (names.num == 20) {
    console.log("it's 20");
} else {
    console.log('not');
}
