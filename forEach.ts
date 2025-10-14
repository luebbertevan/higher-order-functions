// Log every number in [10, 20, 30].
function logAll(nums: number[]) {
	nums.forEach((w) => console.log(w));
}
logAll([10, 20, 30]);


// Write a function countAboveAverage(nums: number[]): number that counts how many numbers are greater than the average.
function countAboveAverage(nums: number[]): number {
	let count = 0;
	const avg = nums.reduce((a, c) => a + c, 0) / nums.length;

	nums.forEach((n) => {
		if (n > avg) count++;
	});

	return count;
}
