function sumToRecursion(num){
    if(num > 1){
        return num+sumToRecursion(num - 1);
    }
    else{
        return 1;
    }
}

function sumToAP(num){
    return ((num*(num+1))/2)
}

function sumToFor(num){
    let sum = 0;
    for(let i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}

console.log(sumToAP(100));
console.log(sumToRecursion(100));
console.log(sumToFor(100));