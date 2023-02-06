function countZeros ( binary_num ) {
    let count = 0;
    for(let i = 0; i < binary_num.length; i++){
        const element = binary_num[i];
        // console.log(element);
        if(element == 0){
            count ++;
        }
    }
    return count;
    
}
const input = countZeros('10101');
console.log(input) 