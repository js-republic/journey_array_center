const { deleteElementByNameModifyingExisting } = require('./index');

describe('In Exercise 3 ', () => {
    test("deleteElementByNameModifyingExisting should same array without 'Bowser' value", () => {

        // Given

        let people = ['Mario', 'Luigi', 'Bowser', 'Peach', 'Toad', 'Toadette'];
        let toDelete = 'Bowser';

        const expected = ['Mario', 'Luigi', 'Peach', 'Toad', 'Toadette'];

        // When
        const result = deleteElementByNameModifyingExisting(people, toDelete);

        // Then
        expect(result).toEqual(expected);
    });
});
