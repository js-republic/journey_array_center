function checkMostUsedWord(text) {
    const listOfWords = text.toLocaleUpperCase().split(' '); 

    const res = listOfWords.map((elem) => [
        elem,
        listOfWords.reduce((acc, elem1) => (elem1 === elem)?acc+1:acc,0)
    ]).reduce((acc,elem) => (elem[1] > acc[1])?elem:acc, ['',0]);

    return res[0];
}

function checkLessUsedWord(text){
    const listOfWords = text.toLocaleUpperCase().split(' '); 

    const res = listOfWords.map((elem) => [
        elem,
        listOfWords.reduce((acc, elem1) => (elem1 === elem)?acc+1:acc, 0)
    ]).reduce((acc,elem) => (elem[1] <= acc[1])?elem:acc, ['',1]);

    return res[0];
}

module.exports = {
	checkMostUsedWord,
	checkLessUsedWord,
};