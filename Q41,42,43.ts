// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

function show_magicians(Magicians: string[]): void{
    for(const magician of Magicians){
        console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
    }
}
const magician: string[]=["Tariq", "Ali", "Hamza", "Saud"]
show_magicians(magician)

// 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
// make_great() that modifies the array of magicians by adding the phrase the Great to each 
// magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(Magicians: string[]): void{
    for(let i = 0; i< Magicians.length; i++){
        Magicians[i] = Magicians[i] +" "+ 'the great'
    }
}
const magicians2: string[]= ["Ali", "Wajahat", "Nauman"];
make_great(magicians2)

// 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with 
// a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
// new array and store it in a separate array. Call show_magicians() with each array to show that you 
// have one array of the original names and one array with the Great added to each magician’s name.

function make_great2(Magicians: string[]): string[] {
    const greatMagician: string[]= [];
    for (let i =0; i<Magicians.length; i++){
        greatMagician.push(Magicians[i]= 'the great');
    }
    return greatMagician
}
const magicians3: string[]=["Duaa", "Usman", "Laiba"]
const greatMagician2: string[] = make_great2(magicians3)
show_magicians(magicians3)
show_magicians(greatMagician2)

