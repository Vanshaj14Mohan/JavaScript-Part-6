//Set Timeout in JavaScript, basically if we want to execute a piece of code after a small period of time.
// It's an in-build function and also it's an function of our window object.
// Syntax -> setTimeout(function, timeout) -> Timeout takes time in miliseconds. 1000ms = 1s.
//Used for Api calls, req & res

console.log("a");

setTimeout( () =>{
    console.log("Hello, I am a function that is executed after 5 seconds.");
}, 5000); // 5 seconds in miliseconds.

console.log("b");