const { flatten } = require('../../utils/flatten');

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
