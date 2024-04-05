let username = "Teboo";
let message = "Welcome, "

function sendMsg() {
    let message = "Welcome, " + username;
    // console.log(message);
}
sendMsg();
// end of function 



function showMessage() {
    userName = "Bob";
    console.log(message, userName)
}
showMessage();
console.log(message, userName);


// using parameters
function sendMsg(from, text){
    from = "Anonymous";
    text = "Welcome to my online learnership, send R500"
    return from, text;
}

console.log(sendMsg());