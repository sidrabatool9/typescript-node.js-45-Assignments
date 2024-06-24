"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else
//  chain.
// * If the alien’s color is green, print a statement that the player just earned 5 points for
//  shooting the alien.
// * If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//  * Write one version of this program that runs the if block and another that runs the else block.
let Alien_color2 = "Green";
if (Alien_color2 == "Green") {
    console.log("Player earned 5 points for shooting the alien");
}
;
if (Alien_color2 != "Red") {
    console.log("The player earned 10 points");
}
;
// let colourOfAlien: string= "yellow";
// if (colourOfAlien == "yellow"){
//     console.log("player shoot the alien")
// }else {
//     console.log("player earned 5 points")
// }
let colourOfAlien = "yellow";
if (colourOfAlien == "green") {
    console.log("player shoot the alien");
}
else {
    console.log("player earned 5 points");
}
