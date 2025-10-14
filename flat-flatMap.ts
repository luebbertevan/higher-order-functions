// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]
console.log([[1, 2], [3, 4], [5]].flat());

// for each inner array, multiply each number by 2
// think of the inner array as producing multiple elements to flatten
// Input: [[1, 2], [3], [4, 5]]
// Output: [2, 4, 6, 8, 10]
console.log([[1, 2], [3], [4, 5]].flatMap((n) => n.map((i) => i * 2)));

// Input: [[1, -2], [-3, 4], [5, -6]]
// Output: [1, 4, 5]
// Hint:
// .flatMap() lets you return an empty array for elements you want to skip
// each inner array can be filtered before flattening
// shows how flatMap combines map + flatten
console.log(
	[
		[1, -2],
		[-3, 4],
		[5, -6],
	].flatMap((arr) => arr.filter((n) => n >= 0))
);

// Input: [[10, 20], [30, 40]]
// Output: ["Row 0, Col 0: 10", "Row 0, Col 1: 20", "Row 1, Col 0: 30", "Row 1, Col 1: 40"]
// Hint:
// outer array: rows → use .flatMap((row, rowIndex, rows) => ...)
// inner array: columns → map each element into a string
// all three args are naturally used here:
// value (row)
// index (rowIndex)
// original array (rows)

console.log(
	[
		[10, 20],
		[30, 40],
	].flatMap((row, rowIndex, outerArr) =>
		row.map((e) => `Row ${rowIndex}, Col ${outerArr.indexOf(row)}: ${e}`)
	)
);
