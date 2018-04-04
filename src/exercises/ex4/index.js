function deleteElementByNameModifyingExisting(people, toDelete) {

	const peopleWithoutElement = [];

	for (let i = 0; i < people.length; i++) {
		if(people[i] !== toDelete) {
			peopleWithoutElement.push(people[i]);
		}
	}

	people = peopleWithoutElement;

	// people.splice(people.findIndex(x => x === 'Bowser'), 1);

	return people;
}

module.exports = {
	deleteElementByNameModifyingExisting
};
