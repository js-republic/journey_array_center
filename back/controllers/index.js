const fs = require('fs');

function getScore() {

	return new Promise((resolve) => {

		fs.readFile('assets/generated/score.json', 'utf-8', (err, data) => {

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

module.exports = {
	getScore,
};
