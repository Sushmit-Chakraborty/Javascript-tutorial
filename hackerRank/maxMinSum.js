//Problem link - https://www.hackerrank.com/challenges/mini-max-sum/problem

const array = [1,2,3,4,5];

var sum = array.reduce(function(a,b){
    return a + b;
});

var min_of_array = Math.min.apply(Math, array);
var max_of_array = Math.max.apply(Math, array);

console.log(`Minimum sum possible: ${sum-max_of_array}`);
console.log(`Minimum sum possible: ${sum-min_of_array}`);
