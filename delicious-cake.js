function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku){
    if(marksOfJim > marksOfDela && marksOfJim > marksOfChinku){
        return 'Jim'
    } else if(marksOfDela > marksOfJim && marksOfDela > marksOfChinku){
        return 'Dela'
    } else{
        return 'Chinku'
    }
}
const result = JimOrDelaOrChinku(84, 99, 77);
console.log(result)