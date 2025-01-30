//1. Write an arrow function that return the sqaure of a number;
const num = (n) =>{
    return n * n;
}

//2. Write a function that prints "Hello world" 5 times at an interval of 2s each.
let id = setInterval(() =>{
    console.log("Hello world");
}, 2000);

setTimeout(()=>{
    clearInterval(id); //to exit the case
    console.log("Interval ran clearly") //checking if the interval is cleared
},10000);