"use strict";
// import * as readline from 'readline';
Object.defineProperty(exports, "__esModule", { value: true });
// // Create a readline interface to read input from the user
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// // Function to reverse a string
// function reverseString(input: string): string {
//   return input.split('').reverse().join('');
// }
// // Ask the user for input
// rl.question('Enter a string to reverse: ', (userInput) => {
//   const reversedString = reverseString(userInput);
//   console.log('Reversed string:', reversedString);
//   // Close the first readline interface
//   rl.close();
//   // Now, create and use the second readline interface
//   const r2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   r2.question('Enter your name: ', (nameInput) => {
//     console.log(`Your name is: ${nameInput}`);
//     const upper = nameInput.toUpperCase();
//     console.log(`Your name in uppercase: ${upper}`);
//     // Close the second readline interface
//     r2.close();
//   });
// });
// // Handle interface closure for the first interface
// rl.on('close', () => {
//   console.log('Goodbye!');
// });
var readline = require("readline");
// Create a readline interface to read input from the user
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
}
// Ask the user for input
rl.question('Enter a string to reverse: ', function (userInput) {
    var reversedString = reverseString(userInput);
    console.log('Reversed string:', reversedString);
    // Close the readline interface
    rl.close();
});
// Handle interface closure
rl.on('close', function () {
    console.log('Goodbye!');
    process.exit(0);
});
