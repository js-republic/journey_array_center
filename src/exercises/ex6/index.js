
function getPlayersNameFromPlays(plays) {

	return plays
		.filter(play => play.time > 60)
		.map(play => play.players.reduce((acc, player) =>
			acc.includes(player.name) ? acc : acc.concat(player.name)
		, []))
		.flat();
}

module.exports = {
	getPlayersNameFromPlays
};

