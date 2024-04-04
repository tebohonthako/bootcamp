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
