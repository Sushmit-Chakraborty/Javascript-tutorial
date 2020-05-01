let ar = [10,20,20,10,10,30,50,10,20];

Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});

let a = 0;
let count = 0;

ar.forEach(element => {
    let var1 = ar.count(element);
    if(var1%2 == 0){
        count = var1/2;
        a += count;
        let b = ar.filter((value,index,arr) => {return value != element})
        ar = b;
    }
    else{
        let var2 = Math.floor(var1/2);
        a += var2;
        let b = ar.filter((value,index,arr) => {return value != element})
        ar = b;
    }
});

console.log(a);
