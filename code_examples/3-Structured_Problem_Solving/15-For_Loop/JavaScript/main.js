/* Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program uses a for loop
 */

const prompt = require("prompt-sync")()

let counter = 0

// input
const positiveIntegerStr = prompt("Enter how many times to repeat: ")
console.log("")

// process & output
const positiveInteger = parseInt(positiveIntegerStr)

for (var loopCounter = 0; loopCounter < positiveInteger; loopCounter++) {
  console.log(`${loopCounter} time(s) through the loop.`)
}

console.log("\nDone.")
