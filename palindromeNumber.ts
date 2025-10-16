function isPalindrome(x: number): boolean {
	const numString = x.toString();
	return numString === numString.split("").reverse().join("");
}
