//const keyword is also used to declare Block Scope variables in ES6. These variables can not be changed once declared unlike let or var.

let x = 10;
x = 20;
// console.log(x) => 20

const x = 10;
x = 20;
//  Uncaught TypeError: Assignment to constant variable.