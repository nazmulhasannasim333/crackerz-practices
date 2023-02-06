const arr = [10, 45, 33,5,99,6];

function findingSmallest ( numbers ) {
    let findSmall = numbers.sort(function(a, b){
        return a - b;
        
    });
    return findSmall[0]
}

const result = findingSmallest(arr);
console.log(result);