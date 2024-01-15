/*Explanation:

Programming Languages Array: The programming_languages array contains strings representing various programming languages used in the 
Hangman game.

randomWord Function: This function selects a random programming language from the array. Here's how it works:

Math.random() * programming_languages.length: Generates a random floating-point number between 0 (inclusive) and the length 
of the array (exclusive).
Math.floor(): Rounds down the floating-point number to the nearest integer, creating a valid index.
programming_languages[randomIndex]: Retrieves the programming language at the randomly generated index.
Export: The randomWord function is exported using export { randomWord }, making it available for use in other files.

This module provides a convenient way to obtain a random programming language for the Hangman game, contributing to the dynamic and diverse 
nature of the game's word selection.*/

// Array containing programming languages for the Hangman game

var programming_languages = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby",
	"fortran",
]

// Function to randomly select and return a programming language from the array
function randomWord() {
	// Generate a random index within the length of the programming_languages array
	const randomIndex = Math.floor(Math.random() * programming_languages.length);

	// Retrieve and return the programming language at the randomly generated index
	return programming_languages[randomIndex];
}

// Export the randomWord function for use in other files
export { randomWord };