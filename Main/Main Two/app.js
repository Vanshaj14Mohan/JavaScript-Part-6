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
        console.log(this); //this would be student object, ie-> parent's scope
        return this.marks; //will show undefined
    }
};