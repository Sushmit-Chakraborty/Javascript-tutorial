//Problem link - https://www.hackerrank.com/challenges/birthday-cake-candles/problem

let birthdayCandles = [4,2,3,4];

var max_of_array = Math.max.apply(Math, birthdayCandles);

Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});

console.log(birthdayCandles.count(max_of_array))