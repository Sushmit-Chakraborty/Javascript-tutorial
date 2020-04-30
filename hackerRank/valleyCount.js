//Problem link - https://www.hackerrank.com/challenges/counting-valleys/problem

const journey = "DUDDUUDDUU";
const arr = [];

for(let i=0;i<journey.length;i++){
    if(journey.charAt(i) == 'D'){
        arr.push(-1)
    }
    else if(journey.charAt(i) == 'U'){
        arr.push(1)
    }
}

let a = 0;
let a1;
let valleyCount = 0;
for(let j=0;j<arr.length;j++){
    a += arr[j]
    if(a == 0 && a1 == -1){
        valleyCount += 1;
    }
    a1 = a;
}

console.log(valleyCount)