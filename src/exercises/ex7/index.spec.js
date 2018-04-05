const { evens, odds } = require('./index');

describe('In Exercise 7 ', () => {
    test("returns only Even numbers", () => {
        // Given
        const input = [1,2,3,4,5,6,7,8,9,10];
        const expectedValue = [2,4,6,8,10];
        // When
        const calculatedValue = evens(input);
        // Then
        expect(calculatedValue).toEqual(expectedValue);
    });

    test("returns only Odd numbers", () => {
        // Given
        const input = [1,2,3,4,5,6,7,8,9,10];
        const expectedValue = [1,3,5,7,9];
        // When
        const calculatedValue = odds(input);
        // Then
        expect(calculatedValue).toEqual(expectedValue);
    });
});