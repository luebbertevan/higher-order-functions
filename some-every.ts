// Check if any number in [1, 2, 3] is greater than 2.
function anyGreaterThan(nums: number[], compare: number): boolean {
	return nums.some((n) => n > compare);
}
console.log(anyGreaterThan([1, 2, 3], 2));
console.log(anyGreaterThan([1, 2, 3, 7], 7));

// Check if all numbers in [2, 4, 6] are even.
function allEven(nums: number[]): boolean {
	return nums.every((n) => n % 2 === 0);
}
console.log(allEven([2, 4, 6]));
console.log(allEven([2, 4, 6, 5]));

// Check if any word in ["hi", "bye", "yes"] contains "y".
function anyContain(words: string[], search: string) {
	return words.some((w) => w.includes(search));
}
console.log(anyContain(["hi", "bye", "yes"], "y"));
console.log(anyContain(["hi", "bye", "yes"], "w"));
console.log(anyContain(["hi", "bye", "yes"], "ye"));

// Check if all strings in an array are lowercase.
