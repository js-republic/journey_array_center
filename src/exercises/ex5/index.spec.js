const { checkForPalindrome } = require('./index');

describe('In Exercise 3 ', () => {
    test("checkForPalindrome should return true with 'never odd or even'", () => {

        // Given
        const palindrome = 'never odd or even';
        const expected = true;

        // When
        const result = checkForPalindrome(palindrome);

        // Then
        expect(result).toEqual(expected);
    });

    test("checkForPalindrome should return false with 'not a palindrome'", () => {

        // Given
        const notapalindrome = 'not a palindrome';
        const expected = false;

        // When
        const result = checkForPalindrome(notapalindrome);

        // Then
        expect(result).toEqual(expected);
    });
});
