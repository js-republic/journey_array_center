const fs = require('fs');

function getScore() {

	return new Promise((resolve) => {

		fs.readFile('src/exercises/ex8/files/score.json', 'utf-8', (err, data) => {

			const content = JSON.parse(data);

			const [scoreFor, scoreWhile] = Object.entries(content)
				.filter(([key, entry]) => key === 'scoreFor' || key === 'scoreWhile')
				.map(([key, entry]) => entry.reduce((acc, value) => acc += value, 0));

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
		fs.readFile('src/exercises/ex8/files/badges.json', 'utf-8', (err,data) => {
			const contentFileParsed = JSON.parse(data);
			
			let allBadges = Object.values(contentFileParsed).flat();
			resolve(allBadges);
		});
	});
}

module.exports = {
	getScore,
	getBadges,
};
