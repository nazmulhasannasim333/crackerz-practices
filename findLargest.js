const myArr = [55,10,95];

function findMax(arr){
    let findlargestNumber = arr.sort(function(a, b){
        return b - a;
    });
    return findlargestNumber[0];
 }

 const result = findMax(myArr);
 console.log(result);
 