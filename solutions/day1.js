console.log("Advent of Code 2022 - Day 1");
// ================================================

const fs = require('fs')
const path = require('path')

// Import the calorie sheet as a massive string
const calorieInput = fs.readFileSync(path.resolve(__dirname, '../inputs/day1_input.txt'), 'utf8')

// Divide the values into individual elf inventories based on empty lines in the text file (ie: \n\n)
const elfInventories = calorieInput.split('\n\n');

let listOfInventoryTotals = [];

// Calculate the total calories for each elf inventory, then add it to the list of totals
elfInventories.forEach(elfInventory => {
    let elfItems = elfInventory.split('\n');

    let elfTotal = 0;
    elfItems.forEach(item => {
        elfTotal += parseInt(item);
    });

    listOfInventoryTotals.push(elfTotal);
});

// Sort the list of calorie totals from highest value to lowest value
listOfInventoryTotals.sort(function (a, b) { return b - a; });

console.log("> The most calories carried by a single elf would be:\n" + listOfInventoryTotals[0] + " Calories");
console.log("> The top three calorie counts are:");

// List off the top three calorie counts while also totaling them up for the next output
var topThreeTotal = 0;
for (let i = 0; i < 3; i++) {
    topThreeTotal += listOfInventoryTotals[i];
    console.log(listOfInventoryTotals[i]);
}

console.log("> And the total of these three counts comes out to:\n" + topThreeTotal + " Calories");
