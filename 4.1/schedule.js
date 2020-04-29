let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(schedule){
    var size = Object.keys(schedule).length;
    if(size > 0){
        return true
    }
    return false
}