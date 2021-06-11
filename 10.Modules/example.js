import {sum, difference} from "./module";

console.log(sum(2, 3));         // 5
console.log(difference(5, 2));  // 3


//Default exports are one of the main ways to export modules. However, a file can have only one default export.
//
// var utils = {
//     sum:  function(a, b) {
//         return a+b;
//     }
//     difference:  function (a, b) {
//          return a-b;
//     }
// }
// export default utils;
// ** app.js**
//
// import utils from 'common_methods';
// console.log(utils.sum(2, 3));         // 5
// console.log(utils.difference(5, 2));  // 3
// export default utils;
// // Re-exports the imported module