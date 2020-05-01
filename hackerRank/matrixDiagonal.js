let matrix = [[11,2,4],[4,5,6],[10,8,-12]];

let matrixSize = 3;
let diagonalOneSum = 0;
let diagonalTwoSum = 0;

for(let i=0;i<matrixSize;i++){
    diagonalOneSum += matrix[i][i]
    diagonalTwoSum += matrix[i][matrixSize-1-i]
}

console.log(Math.abs(diagonalOneSum - diagonalTwoSum));