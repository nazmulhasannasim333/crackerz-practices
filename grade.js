function findGrade(marks){
    if(marks >= 80 && marks <= 100){
        return 'A'
    } else if(marks >= 60 && marks <= 79){
        return 'B'
    } else if(marks >= 50 && marks <= 59){
        return 'C'
    } else if(marks >= 40 && marks <= 49){
        return 'D'
    } else{
        return 'F'
    }
 }

 const inputMarks = findGrade(95);
 console.log(inputMarks);