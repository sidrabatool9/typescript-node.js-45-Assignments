"use strict";
// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you 
// // want to try more comparisons, write more tests. Have at least one True and one False result 
// // for each of the following:
// // 1: Tests for equality and inequality with strings
// // 2: Tests using the lower case function
// // 3: Numerical tests involving equality and inequality, greater than and less than, greater than 
// // or equal to, and less than or equal to
// // 4: Tests using "and" and "or" operators
// // 5: Test whether an item is in a array
// // 6: Test whether an item is not in a array
// 1ST POINT: true
let name1 = "Sidra";
let name2 = "Sidra batool";
let name3 = "Sidra ikhlaq";
if (name1 == name2) {
    console.log("Names are equal");
}
else {
    console.log("Names are not equal");
}
;
// false
if (name1 != name3) {
    console.log("Names are equal");
}
else {
    console.log("Names are not equal");
}
// 2ND POINT: true
let person = "Mehak";
console.log(person.toLowerCase());
// false
console.log(person.toLowerCase);
// 3RD POINT: GREATER THAN (false)
let value1 = 5;
let value2 = 10;
if (value1 > value2) {
    console.log("true");
}
else {
    console.log("false");
}
// LESS THAN(true)
if (value1 < value2) {
    console.log("true");
}
else {
    console.log("false");
}
// Greater than or equal to (false)
if (value1 >= value2) {
    console.log("true");
}
else {
    console.log("false");
}
// less than or equal to(true)
if (value1 <= value2) {
    console.log("true");
}
else {
    console.log("false");
}
// 4TH POINT:
let age1 = 18;
let age2 = 25;
// &&
if (age1 == 18 && age2 == 25) {
    console.log("Person is eligible for vote");
}
// ||
if (age1 == 18 || age2 != 25) {
    console.log("Person is not eligible for vote");
}
//  5TH POINT:
let countries = ["China", "Pakistan", "India", "South africa"];
// in the array
if (countries.includes("China")) {
    console.log("China is in the list");
}
// not in the array
if (!countries.includes("Australia")) {
    console.log("Australia is not in the list");
}
