function checkMostUsedWord(text) {
    const listOfWords = text.toLocaleUpperCase().split(' '); 
    let mostUsedWord = '', maxTimes = 0;
    for(let i=0; i < listOfWords.length; i++){
        let counter = 0;
        for(let j=0; j < listOfWords.length; j++){
            counter += (listOfWords[i] === listOfWords[j])?1:0;
        }
        if(counter > maxTimes){
            mostUsedWord = listOfWords[i];
            maxTimes = counter;
        }
    }
    return mostUsedWord;
    // const res = listOfWords.map((elem) => [
    //     elem,
    //     listOfWords.reduce((acc, elem1) => (elem1 === elem)?acc+1:acc,0)
    // ]).reduce((acc,elem) => (elem[1] > acc[1])?elem:acc, ['',0]);
    // return res[0];
}

function checkLessUsedWord(text){
    const listOfWords = text.toLocaleUpperCase().split(' '); 
    let lessUsedWord = '', minTimes = 1;
    for(let i=0; i < listOfWords.length; i++){
        let counter = 0;
        for(let j=0; j < listOfWords.length; j++){
            counter += (listOfWords[i] === listOfWords[j])?1:0;
        }
        if(counter <= minTimes){
            lessUsedWord = listOfWords[i];
            minTimes = counter;
        }
    }
    return lessUsedWord;
    // const res = listOfWords.map((elem) => [
    //     elem,
    //     listOfWords.reduce((acc, elem1) => (elem1 === elem)?acc+1:acc, 0)
    // ]).reduce((acc,elem) => (elem[1] <= acc[1])?elem:acc, ['',1]);
    // return res[0];
}

module.exports = {
	checkMostUsedWord,
	checkLessUsedWord,
};