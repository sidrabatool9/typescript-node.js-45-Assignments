// More Guests: You found a bigger dinner table, so now more space is available. Think of three 
// more guest to invite to dinner.

// 1:Start with your program from Exercise 15. Add a print statement to the end of your program
// informing people that you found a bigger dinner table.
// 2:Add one new guest to the begining of your array.
// 3:Add one new guest to the middle of your Array.
// 4:Use append() to add one new guest to the end of your list.
// 5:Print a new set of invitation messages, one for each person in your list.

// 1ST POINT:
let guestArr: string[]= ["Wasee", "Saba", "Laiba", "Wajahat"];
let canNotAttend: string= "Saba";
let newGuest: string= "Farwa";
guestArr[guestArr.indexOf(canNotAttend)]= newGuest;
console.log(guestArr);
guestArr.map((items) => 
console.log(`Dear ${items}, I found a bigger dinner table so i invited a more people`));

// 2ND POINT:
let guestBeg: string= "Sara";
guestArr.unshift(guestBeg);
console.log(guestArr);

// 3RD POINT:
let middleGuest: string= "Fatima";
let middleIndex= guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest);
console.log(guestArr);

// 4TH POINT:
let lastGuest: string= "Zeeshan";
guestArr.push(lastGuest);
console.log(guestArr);

// 5th POINT:
guestArr.map((items) => 
console.log(`Dear ${items}, You are invited in the more people category on dinner.`));
