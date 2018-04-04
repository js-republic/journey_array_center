const { flatten } = require('../../utils/flatten');

function getPlayersNameFromPlays(plays) {

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

	return finalPlayers;

	// const finalPlayers = flatten(plays
	// 	.filter(play => play.time > 60)
	// 	.map(play => play.players.reduce((acc, player) =>
	// 		acc.includes(player.name) ? acc : acc.concat(player.name)
	// 	, []))
	// );
}

module.exports = {
	getPlayersNameFromPlays
};
