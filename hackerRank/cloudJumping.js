let clouds = [0,0,0,0,1,0];

let jumps = 0;
let i = 0;

while(i < clouds.length-1){
    if(i+2 < clouds.length && clouds[i+2] != 1){
        i += 1;
    }
    jumps += 1;
    i += 1;
};

console.log(jumps);