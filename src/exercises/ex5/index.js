function checkForPalindrome(text) {

	const palindromeWithoutSpaces = text.replace(/ /g, '');

	return palindromeWithoutSpaces === palindromeWithoutSpaces
		.split('')
		.reverse()
		.join('');
}

module.exports = {
	checkForPalindrome
};
