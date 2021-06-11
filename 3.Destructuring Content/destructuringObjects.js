const  {firstName:first,lastName:last,...details}={
    firstName:  "Neha",
    lastName:   "Singh",
    age:     40,
    city:   "chennai",
    phone:   980000000
}

console.log (first , details);

// Declaration below would assign values a = 1, b = 2 and c = { four: 4, five: 5}
const {one: a, two: b, three: c}  = { one: 1, two: 2, three: { four: 4, five: 5} } ;


// For readability we can use one:one instead of one:a. Declaration below would assign:
//     one = 1, two = 2 and three = { four: 4, five: 5}

const {one: one, two: two, three: three}  = { one: 1, two: 2, three: { four: 4, five: 5} } ;

// Similarly, the declaration below will assign:
//     one = 1, two= 2 and three= 3

const {one, two, three} = { one: 1, two: 2, three: 3 };

// Default values can also be used in destructuring

const {one, two, three, four=4} = { one: 1, two: 2, three: 3 };