function solution(letter){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        return 'VOWEL';
    } else{
        return 'CONSONANT'
    }
}
const inputLetter = solution('a');
console.log(inputLetter);