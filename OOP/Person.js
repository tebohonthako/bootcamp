const Person = {
    // KEY     VALUE
    firstName: 'Alice',

    //accessor property (getter)
get getName() {
    return this.firstName;
},

set changeName(newName){
    this.firstname = newName;
}
}

// this is from the get method only
console.log(Person);
console.log(Person.firstName);
console.log(Person.getName);

Person.newName = "Alisson";
console.log(Person.firstName);
console.log(Person.newName)

