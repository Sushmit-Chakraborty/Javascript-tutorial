//Problem link - https://www.hackerrank.com/challenges/grading/problem

const normalMarks = [73,67,38,33];
const finalMarks = []

normalMarks.forEach(element => {
    if(element < 38){
        finalMarks.push(element);
    }
    else{
        let multFactor = Math.floor(element/5) + 1;
        let numberToAdd = (multFactor * 5) - element;
        if(numberToAdd < 3){
            finalMarks.push(multFactor*5);
        }
        else{
            finalMarks.push(element);
        }
    }
});

console.log(finalMarks);