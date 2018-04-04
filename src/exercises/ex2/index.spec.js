const { howMuchButterDoINeed } = require('./index');

describe('In Exercise 2 ', () => {
    test("howMuchButterDoINeed should return 640 with given elements", () => {

        // Given
        const elements = [
            {
                name: 'Sauce Bechamel',
                butter: 70
            },
            {
                name: 'Beurre de crustacé',
                butter: 200
            }, {
                name: 'Galette Saint Michel',
                butter: 170
            }, {
                name: 'Petits Beurres',
                butter: 200
            }
        ];

        const expected = 640;

        // When
        const result = howMuchButterDoINeed(elements);

        // Then
        expect(result).toEqual(expected);
    });

    test("howMuchButterDoINeed should not return 640 with given elements", () => {

        // Given
        const elements = [
            {
                name: 'Sauce Bechamel',
                butter: 70
            },
            {
                name: 'Beurre de crustacé',
                butter: 200
            }, {
                name: 'Galette Saint Michel',
                butter: 170
            }, {
                name: 'Petits Beurres',
                btter: 200
            }
        ];

        const expected = 640;

        // When
        const result = howMuchButterDoINeed(elements);

        // Then
        expect(result).not.toEqual(expected);
    });
});
