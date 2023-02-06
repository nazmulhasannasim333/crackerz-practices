const myArr =[{ fname:'John'}, 'fname']

const deleteProperty =(arr)=>{
    const property = Object.keys(arr[0]);
    if(property[0] === 'fname'){
        delete property[0].fname;
        return 'YES'
    } else{
        return 'NO'
    }
}

const result = deleteProperty(myArr);
console.log(result);