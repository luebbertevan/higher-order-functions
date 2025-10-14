// Find the first even number in [1, 3, 7, 8, 10].

function firstEven(nums: number[]): number | undefined {
	return nums.find((n) => n % 2 === 0);
}
console.log(firstEven([1, 3, 7, 8, 10]));

// Given users like { id: 1, name: "Evan" }, find the one with id === 2.
type User = { id: number; name: string };
function findId2(users: User[]): User | undefined {
	return users.find((u) => u.id === 2);
}
console.log(
	findId2([
		{ id: 1, name: "Evan" },
		{ id: 2, name: "Marvan" },
	])
);

// Given ["apple", "banana", "pear"], find the first word starting with “p”.
function startsWithP(words: string[]): string | undefined {
	return words.find((w) => w.startsWith("p"));
}
console.log(startsWithP(["apple", "banana", "pear"]));

//You have an array of numbers. Return the first number that is strictly greater than all numbers that came before it.
function greaterThanBefore(nums: number[]): number | undefined {
	return nums.find(
		(n, i, arr) => i > 0 && arr.slice(0, i).every((e) => e < n)
	);
}
console.log(greaterThanBefore([1, 2, 1, 3, 2]));
console.log(greaterThanBefore([11, 2, 1, 13, 2]));
console.log(greaterThanBefore([5, 3, 4, 6]));
