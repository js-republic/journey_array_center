function getCountries(countries) {

	return countries.map(country => ({
		name: country.name,
		iso: `${country.iso639}-${country.iso3166}`
	}));
}

module.exports = {
	getCountries,
};
