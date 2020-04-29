let extractCurrencyValue = (amount) => {
    if(amount){
        return amount.slice(1);
    }
    return amount;
};

console.log(extractCurrencyValue('$120'));