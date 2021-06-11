// Destructuring is a convenient way of extracting multiple values from data stored in arrays or objects into distinct variables.

// Taking array elements directly into variables:
    let [one, two, three, four] = ["chennai", "mumbai", "goa", "cochin"];
//console.log(one);  => chennai


// Skipping values and taking second array element in variable two:
    let [,two,,]=["chennai", "mumbai", "goa", "cochin"];
//console.log(two);  => mumbai


//Destructuring Nested Arrays:
    const [one, two, three] = [ 1,  [2,3],  [4,5] ];
//one=> 1 two=> [2,3], three=>[4,5]