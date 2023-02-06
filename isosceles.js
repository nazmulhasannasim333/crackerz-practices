function checkTriangle(side1, side2, side3){
    if(side1 !== side2 && side1 === side3){
        return 'Yes'
    } else if(side2 !== side1 && side2 !== side3){
        return 'Yes'
    } else {
        return 'No'
    }

}

const input = checkTriangle(9, 8, 9);
console.log(input);