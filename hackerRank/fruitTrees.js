const houseStartPoint = 7;
const houseEndPoint = 10;

const orangeTree = 12;
const appleTree = 4;

const appleLandDistance = [2,3,-4];
const orangeLandDistance = [3,-2,-4];

let appleCount = 0;
let orangeCount = 0;

for(let i=0;i<appleLandDistance.length;i++){
    let appleLandPoint = appleTree + appleLandDistance[i];
    let orangeLandPoint = orangeTree + orangeLandDistance[i];
    if((appleLandPoint >= houseStartPoint) && (appleLandPoint <= houseEndPoint)){
        appleCount += 1;
    }
    if((orangeLandPoint >= houseStartPoint) && (orangeLandPoint <= houseEndPoint)){
        orangeCount += 1;
    }
}

console.log(appleCount,orangeCount);