let arr = [12,3,4,5,5,6,4,2,5,43,3,3,4,54];

let set = new Set(arr);
set.add("hello");

set.add({a:2,b:3});

set.delete(12);

// console.log(set);
// console.log(set.size);
// set.clear();
set.forEach(element =>{
    console.log(element);
})
