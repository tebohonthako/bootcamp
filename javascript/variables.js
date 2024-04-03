let greetings = "welcome to FS";
let times = 5.1; 
// block scope
if(times <5 && times===5 ) {
    let greetings = "Hi so and so";
    console.log()
}else {
    console.log(greetings)
}
// end of block scope

var hello = "Welcome note"
if(times ==5 || times >5) {
    hello = "Welcome to Javascript"
}
if (times !=5) {
    console.log(greetings + " : " + 'Guesswork')
}else {
    console.log("I knew it !!! ")
}
console.log(greetings + " : " + hello );

