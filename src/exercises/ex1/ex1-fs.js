const fs = require('fs');

function getScore() {

	return new Promise((resolve) => {

		fs.readFile('src/exercises/ex1/files/score.json', 'utf-8', (err, data) => {

			const content = JSON.parse(data);

			let scoreFor = 0;
			let scoreWhile = 0;

			for(const i in content) {
				if(content.hasOwnProperty(i)) {

					if(i === 'scoreFor') {

						for(let j = 0; j < content[i].length; j++) {
							scoreFor += Number(content[i][j]);
						}

					} else if(i === 'scoreWhile') {
						for(let k = 0; k < content[i].length; k++) {
							scoreWhile += Number(content[i][k]);
						}
					}
				}
			}

			// const [scoreFor, scoreWhile] = Object.entries(content)
			// 	.filter(([key, entry]) => key === 'scoreFor' || key === 'scoreWhile')
			// 	.map(([key, entry]) => entry.reduce((acc, value) => acc += value, 0));

			resolve({
				scoreFor: scoreFor,
				totalFor: content.totalFor,
				scoreWhile: scoreWhile,
				totalWhile: content.totalWhile
			});
		});
	});
}

function getBadges(){
	return new Promise((resolve) => {
		fs.readFile('src/exercises/ex1/files/badges.json', 'utf-8', (err,data) => {
			const contentFileParsed = JSON.parse(data);

			let allBadges = [];

			for(const key in contentFileParsed){
				if(contentFileParsed.hasOwnProperty(key)){
					for(let i = 0; i < contentFileParsed[key].length; i++){
						allBadges.push(contentFileParsed[key][i]);
					}
				}
			}

			resolve(allBadges);
		})
	});
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}


function getPlayersNameFromPlays() {

	const plays = [
		{
			players: [
				{
					name: 'Ready Player One',
					id: 1
				}, {
					name: 'Neo',
					id: 2
				}
			],
			time: 65
		}, {
			players: [
				{
					name: 'John',
					id: 3
				}, {
					name: 'Neo',
					id: 2
				}
			],
			time: 21
		}, {
			players: [
				{
					name: 'Electro',
					id: 4
				}, {
					name: 'John',
					id: 3
				}
			],
			time: 49
		}, {
			players: [
				{
					name: 'Winston',
					id: 4
				}
			],
			time: 141
		}
	];

	const finalPlayers = [];

	for(const play in plays) {
		if(plays.hasOwnProperty(play)) {

			for(const player of plays[play].players) {
				if(plays[play].time > 60
					&& finalPlayers.indexOf(player.name) === -1) {
					finalPlayers.push(player.name);
				}
			}
		}
	}

	// const finalPlayers = flatten(plays
	// 	.filter(play => play.time > 60)
	// 	.map(play => play.players.reduce((acc, player) =>
	// 		acc.includes(player.name) ? acc : acc.concat(player.name)
	// 	, []))
	// );
}

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

	const allNotesGood = notes.every(note => note >= minNote);
}

function deleteElementByNameModifyingExisting() {

	let people = ['Mario', 'Luigi', 'Bowser', 'Peach', 'Toad', 'Toadette'];

	const peopleWithoutBowser = [];

	for (let i = 0; i < people.length; i++) {
		if(people[i] !== 'Bowser') {
			peopleWithoutBowser.push(people[i]);
		}
	}

	people = peopleWithoutBowser;

	people.splice(people.findIndex(x => x === 'Bowser'), 1);
}

function checkForPalindrome() {

	const palindrome = 'never odd or even';

	let isPalindrome = true;

	const arrayOfLetter = palindrome.split('');
	const arrayOfLetterWithoutSpaces = [];

	for(const letter of arrayOfLetter) {
		if(letter !== ' ') {
			arrayOfLetterWithoutSpaces.push(letter);
		}
	}

	let i = 0;
	let j = arrayOfLetterWithoutSpaces.length - 1;

	while(i < j) {
		if(arrayOfLetterWithoutSpaces[i] !== arrayOfLetterWithoutSpaces[j]) {
			isPalindrome = false;
		}

		i++; j--;
	}

	const palindromeWithoutSpaces = palindrome.replace(/ /g, '');

	const isPalindrome2 =
		palindromeWithoutSpaces === palindromeWithoutSpaces
			.split('')
			.reverse()
			.join('');
}

module.exports = {
	getScore,
	getBadges,
};
