const arr = [157, 134, 188]

function tallestFriend ( height ) {
    let getTallest = height.sort(function(a, b){
        return b - a;
        
    });
    return getTallest[0];
}

const inputHeight = tallestFriend(arr);
console.log(inputHeight);

