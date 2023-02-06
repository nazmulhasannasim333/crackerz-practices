function getLetter(s) {
    let letter;
    for(let i = 0; i < s.length; i++){
      
    }

    
    switch(s){
        case 'a , e, i, o, u':
          letter = 'A'
        break;
        case 'b , c, d, f, g':
          letter = 'B'
        break;
        case 'h , j , k, l, m':
          letter = 'C'
        break;
        case 'n , p , q , r , s , t , v , w , x , y , z':
          letter = 'D'
        break;
        default:
            letter = 'Not Found'
    }
    
    return letter;
}

const result = getLetter('adfgt')
console.log(result)
