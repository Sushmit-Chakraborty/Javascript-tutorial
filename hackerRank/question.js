let baseStr = 'aba';
let wordCount = 10;

let firstFactor = char_count(baseStr,'a');
let secondFactor = Math.floor(wordCount/(baseStr.length));
let subStringCount = wordCount % baseStr.length
let thirdFactor = char_count(baseStr.substring(0, subStringCount),'a');

function char_count(str, letter) 
{
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
    {
        if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
}

let result = firstFactor * secondFactor + thirdFactor;
console.log(result);