// creating school which is an object

let school = {
    name: "Riebeeckstad high",
    est: "1999",
    location: "Mpumalanga",
    learners: 100,

// CREATE A FUCNTION THAT FETCHED SCHOOL PROPERTIES AND ATTRIBUTES
    displayinfo: function() {
        console.log(`The name of the school is ${school.name} \n 
        located at ${school.location} established at ${school.est}`);
    },

    hardData: function(){
        console.log("The name of the school is " + school.name + "\n" 
        + "location at " + school.location + "etsbalished at " + school.est);
    }
}

school.displayinfo();