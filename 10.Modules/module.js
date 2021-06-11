//Modules
// Module is a file that contains all the code related to a specific functionality.
// These files export functions for other modules to consume.
// The functions or variables defined in a module are not visible outside unless they are explicitly exported.
// It is always a good practice to physically separate the code based on functionality.



//Use the keyword export to export certain variables from a module,
//
// ES6 Modules gives a fine grain control to import / export just what is required for a particular module.
//
// Example module that exports functions: common_methods.js
//
function sum(a, b) {
    return a+b;
}
function difference(a, b) {
    return a-b;
}
export { sum, difference }  // separate methods using comma
export { sum as add, difference as minus } // aliasing