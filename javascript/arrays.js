courses = ['Javascript', 'Java', 'Angular', 'React'];
courses.length = 10;

courses[4] = "Typescipt";
courses[5] = "Vue"

console.log("Number of available courses : " + courses);
console.log(typeof courses)


// Injecting multiple values into array
courses.push(["C++", "Flutter", "C#", "Python"])

console.log('New semester courses: ' + courses);

// check if an array is an arry method
console.log(` courses are: ${courses instanceof Array}`)

let faculty = courses.toString();
console.log("Coures as a string: " + faculty)
console.log(typeof faculty);
console.log(faculty.toUpperCase())


learners = new Array(2);  // undefined array

learners[0] = 1;
learners[1] = 2;
learners[2] = 3;
learners[3] = 5;
learners[4] = 6;
learners[5] = 7;

console.log("Total number of learners ", learners.length)
