function isEven(n){
    return n % 2 === 0;
}

function evens(arr){
    return arr.filter(isEven);
}

function odds(arr){
    return arr.filter((elem)=> !isEven(elem))
}

module.exports = {
	evens,
	odds,
};