const fs = require('fs');

function getScore() {

	return new Promise((resolve) => {

		fs.readFile('src/exercises/ex8/files/score.json', 'utf-8', (err, data) => {

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

			let allBadges = [];

			for(const key in contentFileParsed){
				if(contentFileParsed.hasOwnProperty(key)){
					for(let i = 0; i < contentFileParsed[key].length; i++){
						allBadges.push(contentFileParsed[key][i]);
					}
				}
			}

			resolve(allBadges);
		});
	});
}

module.exports = {
	getScore,
	getBadges,
};
