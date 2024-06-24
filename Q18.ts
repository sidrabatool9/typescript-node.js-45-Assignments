// Seeing the World: Think of at least five places in the world you’d like to visit.

// 1: Store the locations in a array. Make sure the array is not in alphabetical order.
// 2: Print your array in its original order.
// 3: Print your array in alphabetical order without modifying the actual list.
// 4: Show that your array is still in its original order by printing it.
// 5: Print your array in reverse alphabetical order without changing the order of the original list.
// 6: Show that your array is still in its original order by printing it again.
// 7: Reverse the order of your list. Print the array to show that its order has changed.
// 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
// 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order
//  has been changed.
// 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
//  show that its order has changed.

// 1ST POINT:
let placesToVisit: string[]= ["Makkah", "Madina", "Turkey", "Germany", "Switzerland"];

// 2ND POINT:
console.log("Original order:", placesToVisit);

// 3RD POINT:
console.log("Alphabetical order:", [...placesToVisit].sort());

// 4TH POINT:
console.log("Original order after reverse sorting:", placesToVisit);

// 5TH POINT:
console.log("Reverse alphabetical order:", [...placesToVisit].sort() .reverse());

// 6TH POINT:
console.log("Original order after reverse sorting:", placesToVisit);

// 7TH POINT:
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// 8TH POINT:
placesToVisit.reverse();
console.log("Back the original order:", placesToVisit);

// 9TH POINT:
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// 10TH POINT:
placesToVisit.sort() .reverse();
console.log("Sorted in reverse alphabetical order:", placesToVisit);