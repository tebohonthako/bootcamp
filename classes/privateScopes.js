function person(fname, lname){
    let firstname = fname;
    let lastname = lname;

    // using let keyword the method is converted to private method 
    let getDetails_noAccess = function() {
        return (` first name is: ${firstname} and last name is: ${lastname}`)
    }

    this.getDetails_Access = function() {
        return (` first name is: ${firstname} and last name is: ${lastname}`)
    }

}
// e n d   o f   f x 

let person1 = new person("Alice", "Mazibuko");
console.log(person1.firstname);
console.log(person1.getDetails_noAccess);
console.log(person1.getDetails_Access());
