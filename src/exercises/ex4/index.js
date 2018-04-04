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
