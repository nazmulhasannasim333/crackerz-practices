const arr = [10, 45, 33,5,99,6];

function secondLargest ( numbers ) {
    let findSecond = numbers.sort(function(a, b){
        return b - a;
    });
    return findSecond[1]
}

const result = secondLargest(arr);
console.log(result);