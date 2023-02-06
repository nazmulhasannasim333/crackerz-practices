const arr = [20, 13, 37];

function finalScore( scores ) {
    let total = 0;
    for(jerry of scores){
        total += jerry;
    }
    return total;
 }

 const finalResult = finalScore(arr);
 console.log(finalResult);