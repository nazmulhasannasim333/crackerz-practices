function reverseMaker(word){
    const splitString = word.split('');
    const reverseArr = splitString.reverse();
    const joinArr = reverseArr.join('');
    return joinArr;
}

const result = reverseMaker('Hello');
console.log(result);
