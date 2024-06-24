// Name Cases: Store a person's name in variable, and then print that person's name in lowercase,
// uppercase, titlecase.

let personName: String= "Sidra batool";

// in lowercase
console.log("lowercase:", personName.toLowerCase());

// in uppercase
console.log("uppercase:", personName.toUpperCase());

// in titlecase
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));