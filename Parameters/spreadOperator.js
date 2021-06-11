// Spread Operator ( ...) is used to spread an array elements into parameters.

const sum = (x, y, z)  => {
    return x+y+z;
}
let args = [1, 2, 3];
let add = sum(...args);
console.log(add);

// Concatenation of arrays
 let parts = ["shoulder", "knees"];
 let bodyParts = ["head", ...parts, "and", "toes"];
 console.log(bodyParts)



//Math Functions
let numbers = [9, 4, 7, 1];
console.log(Math.max(...numbers));

// Destructuring arrays and objects.
    let [x, y, ...z] = [1,2,3,4,5,6];
//would mean x = 1, y = 2, z = [3,4,5,6]