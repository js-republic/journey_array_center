const {
    doIHaveFruits,
    urlHasKeyword,
    everyNoteUpThanTen,
} = require('./index');

describe('In Exercise 3 ', () => {
    test("doIHaveFruits should return false with elements not in fruits list", () => {

        // Given
        const fruits = ['banana', 'apple', 'orange'];
        const whatIHave = ['tomato', 'cucumber'];

        const expected = false;

        // When
        const result = doIHaveFruits(fruits, whatIHave);

        // Then
        expect(result).toEqual(expected);
    });

    test("doIHaveFruits should return true with elements in fruits list", () => {

        // Given
        const fruits = ['banana', 'apple', 'orange'];
        const whatIHave = ['meat', 'milk', 'apple'];

        const expected = true;

        // When
        const result = doIHaveFruits(fruits, whatIHave);

        // Then
        expect(result).toEqual(expected);
    });

    test("urlHasKeyword should return true with 'easteregg'", () => {

        // Given
        const url = 'http://mywebsite.com/some/page/easteregg/test';
        const splittedUrl = url.split('/');

        const expected = true;

        // When
        const result = urlHasKeyword(splittedUrl);

        // Then
        expect(result).toEqual(expected);
    });

    test("urlHasKeyword should return false with 'noteasteregg'", () => {

        // Given
        const url = 'http://mywebsite.com/some/page/noeasteregg/test';
        const splittedUrl = url.split('/');

        const expected = false;

        // When
        const result = urlHasKeyword(splittedUrl);

        // Then
        expect(result).toEqual(expected);
    });

    test("everyNoteUpThanTen should return true with every note more than 10", () => {

        // Given
        const minNote = 10;
        const notes = [11, 14, 15, 19, 18, 19];

        const expected = true;

        // When
        const result = everyNoteUpThanTen(minNote, notes);

        // Then
        expect(result).toEqual(expected);
    });

    test("everyNoteUpThanTen should return false with not every note more than 10", () => {

        // Given
        const minNote = 10;
        const notes = [1, 14, 5, 19, 18, 19];

        const expected = false;

        // When
        const result = everyNoteUpThanTen(minNote, notes);

        // Then
        expect(result).toEqual(expected);
    });
});
