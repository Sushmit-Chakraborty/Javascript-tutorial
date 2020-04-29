// Lily has a chocolate bar divided into sections with arbitary lengths. She wants to gift Ron two consecutive portions whose lengths sum up
// to Ron's birth date of the month. In how many ways can Lily do this?

// Example - Lily has a chocolate bar of portion lengths 3,1,3,2,2,6. Ron's birthday falls on 4th of a month. Then Lily can gift Ron in 3 ways.
// She can either give him first and second portion(3+1=4) or second and third portion(1+3=4) or fourth and fifth portion(2+2=4).


let chocolate = [1,2,1,2,1];

const ronDate = 3;
let giftingWays = 0;

for(let i=0;i<chocolate.length-1;i++){
    currPortion = chocolate[i];
    leftPortion = ronDate - currPortion;
    if(chocolate[i+1] == leftPortion){
        giftingWays += 1;
    }
}

console.log(giftingWays);