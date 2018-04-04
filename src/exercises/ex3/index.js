function doIHaveFruits(fruits, whatIHave) {

	let haveFruits = false;

	for (let i = 0; i < whatIHave.length; i++) {
		if(fruits.indexOf(whatIHave[i]) !== -1) {
			haveFruits = true;
		}
	}

	return haveFruits;

	// return whatIHave
	// 	.some(x => fruits.includes(x));
}

function urlHasKeyword(splittedUrl) {

	let hasEasterEgg = false;

	for(const part in splittedUrl) {
		if(splittedUrl.hasOwnProperty(part) && splittedUrl[part] === 'easteregg') {
			hasEasterEgg = true;
		}
	}

	return hasEasterEgg;

	// return url
	// 	.some(x => x === 'easteregg');
}

function everyNoteUpThanTen(minNote, notes) {

	let allNotesGood = true;

	for(const note of notes) {
		if(note <= minNote) {
			allNotesGood = false;
		}
	}

	return allNotesGood;

	// return notes.every(note => note >= minNote);
}

module.exports = {
	doIHaveFruits,
	urlHasKeyword,
	everyNoteUpThanTen,
};
