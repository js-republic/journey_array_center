function howMuchButterDoINeed(elements) {
	return elements.reduce((a, b) => a + b.butter, 0);
}

module.exports = {
	howMuchButterDoINeed
};