// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician_1 = Magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["Tariq", "Ali", "Hamza", "Saud"];
show_magicians(magician);
// 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
// make_great() that modifies the array of magicians by adding the phrase the Great to each 
// magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + " " + 'the great';
    }
}
var magicians2 = ["Ali", "Wajahat", "Nauman"];
make_great(magicians2);
// 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with 
// a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
// new array and store it in a separate array. Call show_magicians() with each array to show that you 
// have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(Magicians) {
    var greatMagician = [];
    for (var i = 0; i < Magicians.length; i++) {
        greatMagician.push(Magicians[i] = 'the great');
    }
    return greatMagician;
}
var magicians3 = ["Duaa", "Usman", "Laiba"];
var greatMagician2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagician2);
