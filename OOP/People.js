let People = {
    gender: "male",
}

//lets create a person from our People object
let person = Object(People);


person.name = "John";
person.name = "22";
person.nationality = "SA";

// now we use the key (from attributes ) to get all properties 

// we use this when we fetching data from an API 
for(let key in person){
    console.log(key)
}
