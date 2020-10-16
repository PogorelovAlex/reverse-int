module.exports = function reverse (n) {
    
    let positiveN;
	if (n<0){positiveN=-1*n;}else{positiveN=n};
    
    let arr = positiveN.toString().split('');
    let result;

    let middleIndex = Math.ceil((arr.length-1)/2);
    let firstPart=arr.slice(0,middleIndex+1).reverse();
    let secondPart=arr.slice(middleIndex+1);

    return result =[...secondPart,...firstPart].join("");
}
