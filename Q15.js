"use strict";
// Changing Guest List: You just heard that one of your guest can't make the dinner, so you need to
// send out a new set of invitation. you'll have to think to someone else to invite.
// 1: Start your excercise from Exercise 14. Add a print statement at the end of your program
// starting the name of the guest who can't make it.
// 2. Modify your list, Replacing the name of the guest who can't make it with the name of the
// new person you are inviting.
// 3: Print a second set of invitation message, one for each person who is still in your list.
// 1ST POINT:
let guestArr = ["Wasee", "Saba", "Laiba", "Mehak", "Baqir", "Wajahat"];
let canNotAttend = "Saba";
console.log(canNotAttend + " " + "can not attend the dinner.");
// 2ND POINT:
let newGuest = "Alisha";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// 3RD POINT:
guestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
