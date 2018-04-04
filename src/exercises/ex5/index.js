function checkForPalindrome() {

	const palindrome = 'never odd or even';

	let isPalindrome = true;

	const arrayOfLetter = palindrome.split('');
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

	const palindromeWithoutSpaces = palindrome.replace(/ /g, '');

	const isPalindrome2 =
		palindromeWithoutSpaces === palindromeWithoutSpaces
			.split('')
			.reverse()
			.join('');
}
