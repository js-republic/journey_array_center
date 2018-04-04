function doIHaveFruits(fruits, whatIHave) {

	let haveFruits = false;

	for (let i = 0; i < whatIHave.length; i++) {
		if(fruits.indexOf(whatIHave[i]) !== -1) {
			haveFruits = true;
		}
	}

	return haveFruits;
}

function urlHasKeyword(splittedUrl) {

	let hasEasterEgg = false;

	for(const part in splittedUrl) {
		if(splittedUrl.hasOwnProperty(part) && splittedUrl[part] === 'easteregg') {
			hasEasterEgg = true;
		}
	}

	return hasEasterEgg;
}

function everyNoteUpThanTen(minNote, notes) {

	let allNotesGood = true;

	for(const note of notes) {
		if(note <= minNote) {
			allNotesGood = false;
		}
	}

	return allNotesGood;
}

module.exports = {
	doIHaveFruits,
	urlHasKeyword,
	everyNoteUpThanTen,
};
