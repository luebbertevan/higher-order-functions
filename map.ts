// map(fn) – transforms each element
// Given [1, 2, 3, 4], return an array with each number squared.
function squareNums(nums: number[]): number[] {
	return nums.map((n) => n * n);
}
console.log(squareNums([1, 2, 3, 4]));

// Given ['a', 'b', 'c'], return ['A', 'B', 'C'].
function toCaps(lowerCase: string[]): string[] {
	return lowerCase.map((l) => l.toUpperCase());
}
console.log(toCaps(["a", "b", "c"]));

// Given an array of objects like { name: "Alice", age: 20 }, return an array of just the names.
type Student = {
	name: string;
	age: number;
};
function getName(students: Student[]): string[] {
	return students.map((s) => s.name);
}
console.log(getName([{ name: "Bob", age: 23 }]));
// Given [5, 10, 15], return each element divided by 5.
function divByFive(nums: number[]): number[] {
	return nums.map((n) => n / 5);
}

console.log(divByFive([5, 20, 13]));

// Index labeling:
// Given ['apple', 'banana', 'cherry'], return ['0: apple', '1: banana', '2: cherry'].
function labelFruits(fruits: string[]): string[] {
	return fruits.map((f, i) => `${i}: ${f}`);
}
console.log(labelFruits(["apple", "banana", "cherry"]));

// Compare to first element:
// Given [5, 10, 15], return [0, 5, 10] → each element minus the first element.
function minusFirst(nums: number[]): number[] {
	return nums.map((n, _, arr) => n - arr[0]);
}
console.log(minusFirst([5, 10, 15]));

// Check relative size:
// Given [2, 4, 1, 5], return ['first', 'bigger', 'smaller', 'bigger']
// Compare each element to the first one.
function compareSizeToFirst(nums: number[]): string[] {
	return nums.map((n, i, arr) =>
		i === 0
			? "first"
			: n > arr[0]
			? "bigger"
			: n < arr[0]
			? "smaller"
			: "equal"
	);
}
console.log(compareSizeToFirst([2, 4, 1, 5, 2]));

// Array as reference:
// Double every element, then subtract the last element of the array (use array[array.length-1]).
function doubleMinusLast(nums: number[]): number[] {
	const last = nums[nums.length - 1];
	return nums.map((n, _, arr) => n * 2 - last);
}
console.log(doubleMinusLast([1, 2, 3, 4, 5]));
