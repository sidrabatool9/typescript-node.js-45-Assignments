"use strict";
// Shrinking Guest list: You just found out that your new dinner table won't arrived in time 
// for dinner, and you have space for only two guests.
// 1: Start with your program from Excercise 16.Add a new line that prints a message saying that
// you can invite only two people for dinner.
// 2:Remove guests from your list one at a time until only two names remain in your list. Print
// a message to that person letting them know you're sorry you can't invite them to dinner.
// 3: Print a mesage to each of the two people still on your list, letting them know they're still
// invited.
// 4: Remove the last two names from your list, so you have an empty list. Print your list to
// make sure you actually have an empty list at the end of your program.
// 1ST POINT:
let guests = ["Sidra", "Dawood", "Taha", "Maria", "Sana"];
console.log("Due to limite space, only two people can be invited for dinner. ");
// 2ND POINT:
while (guests.length > 2) {
    const removedGuests = guests.pop();
    console.log(`Sorry, ${removedGuests}, You're no longer invited for dinner.`);
}
// 3RD POINT:
guests.forEach((guests) => console.log(`Dear ${guests}, You're still invited to dinner.`));
// 4TH POINT:
guests.pop();
guests.pop();
console.log("Final guest list:", guests);
