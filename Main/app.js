//This keyword refers to an object that is executing the current piece of code.
//Hint -> Whichever object is executing any method that becomes our this.
const student = {
    name: "John", 
    age: 22,
    eng: 92,
    maths: 95,
    computer: 95,
    getAvg() { //method/ functions can't directly access our parameters. 
        console.log(this);
        avg = (this.eng + this.maths + this.computer) / 3; //used this as 
        console.log(`${this.name} got average marks = ${avg}`);
    }
}