const student = {
    name: "Aman",
    marks: 92,
    prop: this, //global scope
    getName: function (){
        console.log(this); //this would be student object
        return this.name; //and for this it would be Aman ie student.name
    },
    //Now using same thing with arrow functions
    getMarks: () => {
        console.log(this); //this would be student object, ie-> parent's scope = window
        return this.marks; //will show undefined
    }, 
    getInfo1: function(){
        setTimeout( ()=>{
            console.log(this); //this would be student object here.
        }, 2000);
    },
    getInfo2: function(){ //using a normal function 
        setTimeout(function (){
            console.log(this); //this would be Window object here
        },2000);
    },
};