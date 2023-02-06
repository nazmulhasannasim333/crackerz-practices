const arr = [2023,2024,2025,2028,2030];

function findLeapYear(arrOfYears){
    let pushLeapYear = [];
   for(year of arrOfYears){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        pushLeapYear.push(year)
    }
   }
   return pushLeapYear
}

const result = findLeapYear(arr);
console.log(result)




