// Maps
//
// Maps are objects that associate a key to a value.
// Maps allows both primitives and objects as key and value. But object allows only string keys.


// Set
//
// It is a collection of unique values.
// Values can be primitive or objects.

//WeakSet and WeakMap
// WeakSet and WeakMap are similar to Set and Map respectively except that:
//
// Values are easily garbage collected in WeakSet or WeakMap.
// They cannot be iterated.
// Set references are strong pointers, while WeakSet references are weak pointers and vice versa for map.
// Accepts only objects as keys, no primitives.
// Few methods such as: .values(), .keys, .entries, and .size do not work.

let map = new Map([['a1', 'hello'], ['a2', ' world']]);
map.set('a3', 'shankar');

map.delete('a1');
console.log(map);

//WeakSet
let nameWeakSet = new WeakSet();

let car1 = {
    make: 'honda',
    model: 'civic'
};

nameWeakSet.add(car1);
console.log(nameWeakSet);





