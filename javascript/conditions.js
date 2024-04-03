const gpa = 10;

const exp = 70;
const dist = 85;
const avg = 50;
const fail = 49;
const dnw = 0;


if(gpa === avg){
    console.log("You passed with an average of:  " + gpa);
}else if(gpa <= fail){
    console.log("Try again next semester")
}else if(gpa >= dist){
    console.log("You passed with distinction 🌟" )
}else if(gpa <= exp){
    console.log("You got exempted with a mark of: " + gpa)
}else if(gpa == dnw){
    console.log('Did not write')
}
else {
    console.log("You missed the point with: " + gpa);
}