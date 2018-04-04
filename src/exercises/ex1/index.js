function getCountries(countries) {

	const newCountries = [];

	for(const country in countries) {
		if(countries.hasOwnProperty(country)) {

			newCountries.push({
				name: countries[country].name,
				iso: `${countries[country].iso639}-${countries[country].iso3166}`
			});
		}
	}

	return newCountries;
}

module.exports = {
	getCountries,
};
