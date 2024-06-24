"use strict";
// Guest List: If you could invite anyone, Living or deceased, to dinner, Who would you invite? 
// Make a list that include atleast three people you'd like to invite to dinner. Then use your list
// to print a message to each person, inviting them to dinner.
// TYPE 1 SOLUTION
// let list: string[]= ["Wasee","Saba","Laiba","Mehak","Baqir","Wajahat"];
// let message: String= "I would like to invite you on dinner tonight";
// console.log("Dear", list[0]+" "+ message);
// console.log("Dear", list[1]+" "+ message);
// console.log("Dear", list[2]+" "+ message);
// console.log("Dear", list[3]+" "+ message);
// console.log("Dear", list[4]+" "+ message);
// console.log("Dear", list[5]+" "+ message);
// TYPE 2 SOLUTION
let guestArr = ["Wasee", "Saba", "Laiba"];
guestArr.map((items) => (console.log(`Dear ${items}, You are invited to the dinner`)));
