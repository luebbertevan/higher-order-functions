// Given [1, 2, 3, 4, 5, 6], return only even numbers.
function getEvens(nums: number[]): number[] {
	return nums.filter((n) => n % 2 === 0);
}
console.log(getEvens([1, 2, 3, 4, 5, 6]));

// Given a list of words, return only the ones longer than 3 letters.
function longerThanThreeLetters(words: string[]): string[] {
	return words.filter((w) => w.length > 3);
}
console.log(longerThanThreeLetters(["one", "two", "three", "", "1"]));

// Given an array of objects { name, active }, return only the active ones.
function getActive(objects: { name: string; active: boolean }[]): object[] {
	return objects.filter((o) => o.active);
}
console.log(
	getActive([
		{ name: "Evan", active: true },
		{ name: "Mary", active: true },
		{ name: "Rachel", active: false },
		{ name: "Madrid", active: true },
	])
);
// Given [0, "", null, "hi", 42], return only truthy values.
function getTruthy(arr: any[]): any[] {
	return arr.filter((o) => o);
}
console.log(getTruthy([0, "", null, "hi", 42]));

// 1. filter by position
// given an array of numbers, return only the elements whose value equals their index.
// use the second argument of the predicate (value, index).
// example: [0, 2, 2, 3] → [0, 2, 3] because 0 at 0, 2 at 2, 3 at 3.
// hint: predicate will look like (value, index) => ???
function equalToIndex(nums: number[]): number[] {
	return nums.filter((n, i) => n === i);
}
console.log(equalToIndex([0, 2, 2, 3]));

// 2. filter by comparison with array average
// given an array of numbers, return only elements greater than the average of the whole array.
// use the third argument (value, index, array) to access the full array inside the predicate.
// example: [1, 3, 5, 7] → [5, 7] (average is 4).
// hint: calculate the average inside the filter using array.
function greaterThanAvg(nums: number[]): number[] {
	const avg = nums.reduce((a, c) => a + c, 0) / nums.length;
	return nums.filter((n) => n > avg);
}
console.log(greaterThanAvg([1, 3, 5, 7]));

//Combine it: filter words that include "e".
function getWordsContaining(
	words: string[],
	contains: string
): string[] | undefined {
	return words.filter((w) => w.includes(contains));
}
console.log(getWordsContaining(["apple", "banana"], "a"));
console.log(getWordsContaining(["apple", "banana"], "w"));
console.log(getWordsContaining(["anpple", "banana"], "an"));
