function talk()

{
    
    var know = {
        "Hello?" : "Hey there! 👋🏾",
        "Who are you" : "My name is Alice",
        "How are you" : "I'm Good",
        "What can i do for you?" : "Give us a follow and a like",
        "Your followers" : "I have 1000 likes and no followers yet!",
        "Okay" : "Thank for the convo",
        "Bye" : "Okay we will meet soon"

    }

    var user = document.getElementById('userBox').value
    document.getElementById('chatLog').innerHTML = user + "<br>";

    if(user in know) {
      document.getElementById('chatLog').innerHTML = know[user] + "<br>"

    }else{
        document.getElementById('chatLog').innerHTML = "sorry I dont understand";
    }
}

