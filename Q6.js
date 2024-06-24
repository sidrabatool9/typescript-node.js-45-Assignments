"use strict";
// Stripping names: Store a persons's name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each character combination,"\t"and "\n", at least once.
// print the name once, so the whitespace around the name is displayed. Then print the name after 
// striping the white spaces.
let personName = "\t\n Sidra Batool \n\t";
console.log("original:", personName);
console.log("Stripped:", personName.trim());
