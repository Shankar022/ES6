//Symbols are new unique, immutable, primitive data type just like Number, String, and Boolean.
// They were originally meant to provide private properties.
//


// Symbol() function can be used to create symbols.
    const mySymbol = Symbol();


// Symbol can not be instantiated using new keyword.
// var sym = new Symbol(); // TypeError



// Each time the Symbol() function is called, a new unique symbol is returned.
let symbol1 = Symbol();
let symbol2 = Symbol();
console.log( symbol1 === symbol2 );  //false



// Symbol() function will not create a global symbol that is available in the whole codebase.
//
//     To create global scope Symbols, use following methods.
//
// 'Symbol.for()'
// 'Symbol.keyFor()'
// These methods can be used to set and retrieve symbols from the global symbol registry


// Symbol.keyFor(key) method is essentially opposite of Symbol.for(key).
//
//     Instead of passing a key to get a symbol, pass a symbol to get a key.

let sym1 = Symbol("desc");
// Local symbol
let sym2 = Symbol.for("desc");
// Global symbol

console.log(Symbol.keyFor(sym1));
// undefined
console.log(Symbol.keyFor(sym2));
// desc

// Symbols as Object Keys
// Symbols can be used as object keys to have (semi) private properties in JavaScript.

// Defining symbol
    let email = Symbol();
// Defining object "user"
let user = {
    name:"praveen",
    age : 30,
//Symbol as key in array
    [email] : "praveen@gmail.com"
};
// Symbols are visible if accessed directly:

    console.log(user[email]);
// praveen@gmail.com

for (let i in user) { console.log(i);}
Object.keys(user);
Object.getOwnPropertyNames(user);