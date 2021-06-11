// Rest allows indefinite number of parameters in one single array. Notation ...<paramname> is used to define Rest Parameter.

//args is rest parameter
 const sum = (...args) => {
    var result = 0;
    args.forEach(function(args) { result += args; } )
    return result;
}
let [x,y,z] = [1, 2, 3];
let add = sum(x, y, z);
console.log(add);  // output: 6