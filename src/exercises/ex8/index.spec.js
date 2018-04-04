const { getScore, getBadges } = require('./index');

describe('In Exercise 8 FileSystem ', () => {
    test("getBadges should return expected value", async () => {
        // Given
        const expectedValue = [ 
            { name: 'gymnaste', id: 1, score: 30 },
            { name: 'grimpeur', id: 2, score: 20 },
            { name: 'sherlock', id: 4, score: 15 },
            { name: 'test1', id: 5, score: 10 },
            { name: 'test2', id: 6, score: 5 },
            { name: 'final', id: 7, score: 0 } 
        ];
        // When
        const calculatedValue = await getBadges();
        // Then
        expect(calculatedValue).toEqual(expectedValue);
    });

    test("getScore should return expected value", async () => {
        // Given
        const expectedValue = { scoreFor: 3, totalFor: 20, scoreWhile: 7, totalWhile: 10 }
        // When
        const calculatedValue = await getScore();
        // Then
        expect(calculatedValue).toEqual(expectedValue);
    });
});
