//Problem link - https://www.hackerrank.com/challenges/compare-the-triplets/problem

alice = [17,28,30];
bob = [99,67,8];

alicePoints = 0;
bobPoints = 0;

for(let i=0;i<alice.length;i++){
    if(alice[i] > bob[i]){
        alicePoints += 1;
    }
    else if(alice[i] < bob[i]){
        bobPoints += 1;
    }
}

if(alicePoints > bobPoints){
    console.log(`Alice wins with a point of ${alicePoints},bob was at ${bobPoints} point(s)`)
}
else if(alicePoints < bobPoints){
    console.log(`Bob wins with a point of ${bobPoints},alice was at ${alicePoints} point(s)`)
}
else{
    console.log(`Tis a draw! Both of them have a point of ${alicePoints}`)
}