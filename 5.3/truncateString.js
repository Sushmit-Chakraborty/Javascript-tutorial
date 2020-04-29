console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20))

function truncate(sentence,limit){
    const dots = '...';
    if(sentence.length > limit){
        return sentence.substring(0,limit) + dots;
    }
    return sentence;
}