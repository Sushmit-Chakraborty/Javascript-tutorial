class FormatError extends SyntaxError{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("This is a format error")

console.log(err.message);
console.log(err.name);