function longestCommonPrefix(strs: string[]): string {
	let longestCommonPrefix = "";
	let currentChar = "";
	let index = 0;
	let stillPrefix = true;
	while (stillPrefix) {
		for (let i = 0; i < strs.length; i++) {
			let currentWord = strs[i];
			//console.log(currentWord, i);
			if (currentWord.length === index) stillPrefix = false;
			else if (i === 0) currentChar = currentWord[index];
			else if (currentWord[index] !== currentChar) stillPrefix = false;
			//console.log(currentChar);
		}
		//console.log(currentChar);
		if (stillPrefix) longestCommonPrefix += currentChar;
		index++;
	}
	return longestCommonPrefix;
}

const strs = ["flower", "flow", "flight"];
const strs1 = ["flower", "flow", "flower"];

console.log(longestCommonPrefix(strs1));
