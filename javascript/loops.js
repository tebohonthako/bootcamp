courses = ['Javascript', 'Java', 'Angular', 'React'];

let i=0;
let length = courses.length;
let space = " ";

for(i=0 ; i<length; i++){
    space += courses [i + '']
    // i++;
};

console.log(space);

//Lets display text five times 
const n=7;

for(let i=1; i<n; i++){
    console.log(` Lets code in JS ` + i + `days in the week`)
}