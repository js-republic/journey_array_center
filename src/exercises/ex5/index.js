function checkForPalindrome(text) {

	let isPalindrome = true;

	const arrayOfLetter = text.split('');
	const arrayOfLetterWithoutSpaces = [];

	for(const letter of arrayOfLetter) {
		if(letter !== ' ') {
			arrayOfLetterWithoutSpaces.push(letter);
		}
	}

	let i = 0;
	let j = arrayOfLetterWithoutSpaces.length - 1;

	while(i < j) {
		if(arrayOfLetterWithoutSpaces[i] !== arrayOfLetterWithoutSpaces[j]) {
			isPalindrome = false;
		}

		i++; j--;
	}

	return isPalindrome;
}

module.exports = {
	checkForPalindrome
};
