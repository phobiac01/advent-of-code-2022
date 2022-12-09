console.log("Advent of Code 2022 - Day 3 \n============================");
// ================================================
const fs = require('fs')
const path = require('path')

const rucksackInput = fs.readFileSync(path.resolve(__dirname, '../inputs/day3_input.txt'), 'utf8')
const rucksacks = rucksackInput.split('\n');

const commonCharactersList = [];

// Extract a list of every item that appears in each compartment of each sack, then compare to find the match
rucksacks.forEach(rucksack => {
    let rsLength = rucksack.length;
    let uniqueLeft = [...new Set(rucksack.substring(0, rsLength / 2))];
    let uniqueRight = [...new Set(rucksack.substring(rsLength / 2, rsLength))];
    let commonItem = "";

    // Sort through both sides of the rucksack's unique values to see 
    uniqueLeft.some((value) => {
        // Check for a match from every item of the uniqueRight array
        uniqueRight.some((item) => {
            if (value === item) {
                commonItem = value;
                return true;
            }
        });

        if (commonItem.length > 0) return true;
    });

    commonCharactersList.push(commonItem);
});

// Calculate the value of each common character, and add it to the total
var totalPoints = 0;
const characterValueReference = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
commonCharactersList.forEach(character => {
    totalPoints += characterValueReference.indexOf(character);
});

console.log({totalPoints});
