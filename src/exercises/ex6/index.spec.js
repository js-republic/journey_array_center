const { getPlayersNameFromPlays } = require('./index');

describe('In Exercise 3 ', () => {
    test("getPlayersNameFromPlays should return array of players name who played at least a game more than 60 min", () => {

        // Given
        const plays = [
            {
                players: [
                    {
                        name: 'Ready Player One',
                        id: 1
                    }, {
                        name: 'Neo',
                        id: 2
                    }
                ],
                time: 65 // in minutes
            }, {
                players: [
                    {
                        name: 'John',
                        id: 3
                    }, {
                        name: 'Neo',
                        id: 2
                    }
                ],
                time: 21
            }, {
                players: [
                    {
                        name: 'Electro',
                        id: 4
                    }, {
                        name: 'John',
                        id: 3
                    }
                ],
                time: 49
            }, {
                players: [
                    {
                        name: 'Winston',
                        id: 4
                    }
                ],
                time: 141
            }
        ];
        const expected = ['Ready Player One', 'Neo', 'Winston'];

        // When
        const result = getPlayersNameFromPlays(plays);

        // Then
        expect(result).toEqual(expected);
    });
});
