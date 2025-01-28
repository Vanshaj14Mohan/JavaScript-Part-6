//Same as Set Timeout but with an interval/timeout, takes input same as timeout one 1000mx = 1s.
//Set Interval repeats the function every x milliseconds.
//To stop it from repeating, use Clear Interval. as every setInterval function has an unique id.

console.log("The start");

let id = setInterval( () =>{
    console.log("Test for SetInterval");
}, 2000)// will repeat printing it after every 2s until & unless it is not stopped.
 
console.log(id); //checking id of the function, so that we can stop them

let id2 = setInterval( () =>{
    console.log("Test for SetInterval2");
}, 2000)// will repeat printing it after every 2s until & unless it is not stopped.

console.log(id2); 

clearInterval(id); //stoping it from repeated execution by passing their id in.
clearInterval(id2); //same logic for id2.