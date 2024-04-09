//let age;
let prompt = require("prompt-sync")();

//Lets write a program that will check if the user is old enough to access site.

function checkAge(age){
    if(age >= 18){
        return true;
    }else {
        return console.log("You do not have permission");
    }

}

let age = prompt("How old are you? ",18)
if(checkAge(age)){
    console.log("Access granted!")
}else {
    console.log("Access is denied")
}


function showMovie(){
    let d = 1000;
    let i = 2;
    for(i = 100000; i>d; i--){
        console.log("Access granted")
        console.log("Playing a movie....")
    }
}
showMovie();
showMovie();

