//Get [3, 4] out of [1, 2, 3, 4, 5].
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2, 4));
//or by mutating
console.log(arr.splice(2, 2));
console.log(arr);
