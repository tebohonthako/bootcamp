const myMark = -9;
const passmark = 50;

const exp = 70;
const dist = 75;
const fail = 49;
const dnw = 0;


if(myMark >= passmark && myMark < exp){
    console.log("You passed:  " + myMark);
}else if((myMark < passmark) && (myMark> dnw)){
    console.log("Fail")
}else if(myMark >= dist && myMark >= 100){
    console.log("You passed with distinction 🌟" )
}else if(myMark >= exp && myMark < dist){
    console.log("You got exempted with a mark of: " + myMark)
}else{
    console.log('Did not write')
}
