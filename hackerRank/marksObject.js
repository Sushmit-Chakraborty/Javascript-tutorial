//Problem link - https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

const scores = [3,4,21,36,10,28,35,5,24,42]

let max = scores[0];
let min = scores[0];

let countMin = 0;
let countMax = 0;

scores.forEach((element) => {
    if(element > max){
        max = element
        countMax += 1
    }
    else if(element < min){
        min = element
        countMin += 1
    }
})

console.log(countMax,countMin)