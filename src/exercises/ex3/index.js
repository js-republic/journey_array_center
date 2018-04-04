function doIHaveFruits() {
	const fruits = ['banana', 'apple', 'orange'];
	const whatIHave = ['tomato', 'cucumber'];
	const whatIHaveNext = ['meat', 'milk', 'apple'];

	let haveFruits = false;

	for (let i = 0; i < whatIHave.length; i++) {
		if(fruits.indexOf(whatIHave[i]) !== -1) {
			haveFruits = true;
		}
	}

	if(!haveFruits) {
		for (let j = 0; j < whatIHaveNext.length; j++) {
			if(fruits.indexOf(whatIHaveNext[j]) !== -1) {
				haveFruits = true;
			}
		}
	}

	// const haveFruits = whatIHave
	// 	.concat(whatIHaveNext)
	// 	.some(x => fruits.includes(x));
}

function urlHasKeyword() {

	const url = 'http://mywebsite.com/some/page/easteregg/test';

	const splittedUrl = url.split('/');

	let hasEasterEgg = false;

	for(const part in splittedUrl) {
		if(splittedUrl.hasOwnProperty(part) && splittedUrl[part] === 'easteregg') {
			hasEasterEgg = true;
		}
	}

	// const hasEasterEgg = url
	// 	.split('/')
	// 	.some(x => x === 'easteregg');
}

function everyNoteUpThanTen() {

	const minNote = 10;
	const notes = [11, 14, 15, 19, 18, 19];

	let allNotesGood = true;

	for(const note of notes) {
		if(note <= minNote) {
			allNotesGood = false;
		}
	}

	// const allNotesGood = notes.every(note => note >= minNote);
}
