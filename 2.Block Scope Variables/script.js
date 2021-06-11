const sum = (arr) =>{
    var sum = 0;
    for(var i =0; i< arr.length; i++){
        sum += arr[i];
    }
    //// variable i is available here.
    console.log(`${sum} and ${i}`);
}



const sum1= (arr) =>{
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum += arr[i];
    }
    //// variable i is available here.
    //unresolved variable i
    console.log(`${sum} and ${i}`);
}


sum1([1,2,3,4,5])