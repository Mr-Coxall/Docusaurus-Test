/* Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program uses a while loop
 */

const prompt = require("prompt-sync")()

let counter = 0

// input
const positiveIntegerStr = prompt("Enter how many times to repeat: ")
console.log("")

// process & output
const positiveInteger = parseInt(positiveIntegerStr)

while (counter < positiveInteger) {
  console.log(`${counter} time(s) through the loop.`)
  counter = counter + 1
}

console.log("\nDone.")
