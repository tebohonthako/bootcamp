
// initializing fname constructor so that we can re-use 
// when we initilize outside variables they are global : 
            // eg. let name, var nickname
// constructor(name, nickname) 
//          - we converted the gloabal variables to
//          private params  


class person {
    constructor(fname){
        // initilizing 
        this.fname = fname;
    }
    toString(){
        return (`Name of this person: ${this.fname}`)
    }
    
}

class student extends person {
    constructor(fname, id) {
        // we introduce `super` keyword for calling above class 
        super(fname);  // calling super constructor to extend from parent class
        this.id = id;
    }
    toString() {
        return (`Name of learner is: ${super.toString()}`)
    }
}
// e n d   o f   i n h e r i t e d   c l a s s 
let student1 = new student("Aice", 384)
console.log(student);
console.log(student1.toString);