function howMuchButterDoINeed(elements) {

	let total = 0;

	for(const i in elements) {
		if(elements.hasOwnProperty(i)) {
			total += elements[i].butter;
		}
	}

	return total;
}

module.exports = {
	howMuchButterDoINeed
};