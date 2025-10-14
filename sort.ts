// Sort alphabetically.
console.log(["b", "a", "c"].sort());

// Sort an array of objects { name, age } by age.

console.log([{name: "bob", age: 29}, {name: "amy", age: 25}].sort(age))

// Sort numbers descending.
console.log([11, 2, 22, 1].sort((a, b) => b - a));
console.log([11, 2, 22, 1].sort()); //compares lexigraphically WRONG
