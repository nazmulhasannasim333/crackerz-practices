const arr = [5, 7, 8, 10, 45, 30];

function findOddSum(arrOfNumbers){
    let oddSum = 0;
    for(let i = 0; i < arrOfNumbers.length; i++ ){
        if(arrOfNumbers[i] % 2 ===1){
            oddSum += arrOfNumbers[i]
        }
    }
    return oddSum;
}

const result = findOddSum(arr);
console.log(result)

