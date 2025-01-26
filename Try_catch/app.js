//Try & Catch statement
//The try statement allows you to define a block of code to be tested for errors while it being executed.
//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
console.log("Hello 1");
console.log("Hello 2");
// console.log(a);
try{
    console.log(a);
} catch(err){
    console.log("Error caught, a not defined");
    console.log(err); //will tell us about our error line
}
console.log("Hello 3");
console.log("Hello 4");

//So we use try & catch when we are not sure about a code giving error or not.