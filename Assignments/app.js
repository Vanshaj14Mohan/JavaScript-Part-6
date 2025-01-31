//1.Write an arrow function named isEven(), that takes a single number as argument and returns if it is even or not.
let num = 4;
const isEven = (num) =>{
    return num % 2 === 0;
}

//2. Verify the output.
// let length = 4;
// function callback(){
//     console.log(this.length);
// }

// const object ={
//     length: 5,
//     method(callback){
//         callback();
//     },
// }

// object.method(callback, 1, 2);

//3. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (arr) =>{
    let total = 0;
    for(let number of arr){
        total = total + number;
    }
    return total / arr.length;
};

let arr = [1,2,3,4,5]
console.log(arrayAverage(arr)); 
