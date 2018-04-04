function doIHaveFruits(fruits, whatIHave) {
	return whatIHave.some(x => fruits.includes(x));
}

function urlHasKeyword(splittedUrl) {
	return splittedUrl.some(x => x === 'easteregg');
}

function everyNoteUpThanTen(minNote, notes) {
	return notes.every(note => note >= minNote);
}

module.exports = {
	doIHaveFruits,
	urlHasKeyword,
	everyNoteUpThanTen,
};
