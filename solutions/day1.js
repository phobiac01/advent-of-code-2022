console.log("Advent of Code 2022 - Day 1");
// ================================================

const fs = require('fs')
const path = require('path')

const calorieInput = fs.readFileSync(path.resolve(__dirname, '../inputs/day1_input.txt'), 'utf8')

const elfInventories = calorieInput.split('\n\n');

console.log(elfInventories.length);

let maxCalories = 0;

elfInventories.forEach(elfInventory => {
    let elfItems = elfInventory.split('\n');
    console.log(elfItems);

    let elfTotal = 0; 
    elfItems.forEach(item => {
        elfTotal += parseInt(item);
    });
    console.log({elfTotal});

    if (elfTotal > maxCalories) maxCalories = elfTotal;
});

console.log("The most calories carried by a single elf would be:\n", maxCalories + " Calories");
