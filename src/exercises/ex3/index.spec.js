const {
    doIHaveFruits,
    urlHasKeyword,
    everyNoteUpThanTen,
} = require('./index');

describe('In Exercise 3 ', () => {
    test("doIHaveFruits should return expected value", async () => {

        // Given

        const fruits = ['banana', 'apple', 'orange'];
        const whatIHave = ['tomato', 'cucumber'];

        const expected = false;

        // When
        const result = doIHaveFruits(fruits, whatIHave);

        // Then
        expect(result).toEqual(expected);
    });

    test("doIHaveFruits should return expected value", async () => {

        // Given

        const fruits = ['banana', 'apple', 'orange'];
        const whatIHave = ['meat', 'milk', 'apple'];

        const expected = true;

        // When
        const result = doIHaveFruits(fruits, whatIHave);

        // Then
        expect(result).toEqual(expected);
    });
});
