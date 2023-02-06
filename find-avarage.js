const number = [75.25, 65, 80, 35.45, 99.50];
function average (arrOfMarks){
        let sum = 0;
        for(let i = 0; i < arrOfMarks.length; i++){
            let element = arrOfMarks[i];
            sum += element;
        }
        const totalAvg = sum / number.length;
        const fixed = totalAvg.toFixed(2);
        const parse = parseFloat(fixed)
        return parse;
}
    
    const result = average(number);
    console.log(result);