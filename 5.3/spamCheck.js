function checkSpam(word){
    wordLower = word.toLowerCase();
    if(wordLower.includes('viagra') || wordLower.includes('xxx')){
        return true;
    }
    return false;
}

console.log(checkSpam('viagra'));
console.log(checkSpam('shark'));