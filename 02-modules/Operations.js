// this is a custom module
// Operations class that takes two values an performs a set of arithmetic operations

class Operations{
    constructor(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
    }

    addition(){
        return `Sum of the values ${this.valueA} and ${this.valueB} is: ${this.valueA + this.valueB} <br>`; 
    }

    subtraction(){
        return `Subtraction of the values ${this.valueA} and ${this.valueB} is: ${this.valueA - this.valueB} <br>`;
    }

    multiplication(){
        return `Multiplication of the values ${this.valueA} and ${this.valueB} is: ${this.valueA * this.valueB} <br>`;
    }

    division(){
        return `Division of the values ${this.valueA} and ${this.valueB} is: ${this.valueA / this.valueB} <br>`;
    }
}

// avoid wrapping classes inside curly braces (this will throw an error of undefined)
module.exports = Operations