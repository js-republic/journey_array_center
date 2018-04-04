const { getCountries } = require('./index');

describe('In Exercise 1 ', () => {
    test("getCountries should return expected countries array with iso containing iso639 and 1366", () => {

        // Given
        const countries = [
            {
                name: 'France',
                iso639: 'fr',
                iso3166: 'FR'
            }, {
                name: 'United Kingdom',
                iso639: 'en',
                iso3166: 'GB'
            }, {
                name: 'Espana',
                iso639: 'es',
                iso3166: 'ES'
            },
        ];

        const expected = [
            {
                name: 'France',
                iso: 'fr-FR'
            }, {
                name: 'United Kingdom',
                iso: 'en-GB'
            }, {
                name: 'Espana',
                iso: 'es-ES'
            },
        ];

        // When
        const formatedCountries = getCountries(countries);

        // Then
        expect(formatedCountries).toEqual(expected);
    });
});
