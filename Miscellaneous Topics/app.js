const sum = (a,b) =>{
    console.log(a+b);
}

const cube = (n) =>{
    return n*n*n;
}

const pow = (a,b) =>{
    return Math.pow(a,b);
    // or return a**b; both will work fine:
}

//Note -> If an arrow function has an single argument in it, then we can remove the parentheses around the argument. 
//Applicable only in single argument case.

//Now arrow functions can do Implicit return of data ie-> if we don't use return keyword then the data will be returned automatically.
// eg-> replace {} with ().
const mul = (a,b) =>(
    a*b
)
//Not necessary to write like this, it's just a syntax we should know.