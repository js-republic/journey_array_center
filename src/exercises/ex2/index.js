function howMuchButterDoINeed(elements) {

	let total = 0;

	for(const i in elements) {
		if(elements.hasOwnProperty(i)) {
			total += elements[i].butter;
		}
	}

	return total;

	// return elements.reduce((a, b) => a + b, 0);
}

module.exports = {
	howMuchButterDoINeed
};