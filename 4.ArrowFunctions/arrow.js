 // Arrow functions in ES6 are the modified and abbreviated syntax of JavaScript functions.
 //
 // These functions make use of => token and hence known as Fat Arrow functions.
 //
 // Also, Arrow functions are less verbose than the traditional function expressions.

 const add = (x, y) => { return x+y; }
 const square = (x) => { return x*x; }

 const square1 = x => { return x*x; }
 //Parentheses are optional for single parameter
 const sub  = x => x*x;
 //return and {} are optional for function with single statement

//------------------------------------------------------------------------

 // Arrow functions can also be used as function expressions to return object literals.
 // The function body should be wrapped in parentheses () to achieve this.

 const bio = (name, age, country) => ({name: name, age: age, country: country})