const { flatten } = require('../../utils/flatten');

function getPlayersNameFromPlays(plays) {

	return flatten(plays
		.filter(play => play.time > 60)
		.map(play => play.players.reduce((acc, player) =>
			acc.includes(player.name) ? acc : acc.concat(player.name)
		, []))
	);
}

module.exports = {
	getPlayersNameFromPlays
};
