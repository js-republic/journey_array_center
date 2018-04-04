function deleteElementByNameModifyingExisting(people, toDelete) {

	people.splice(people.findIndex(x => x === 'Bowser'), 1);
	return people;
}

module.exports = {
	deleteElementByNameModifyingExisting
};
