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








// ================================================================
// Part 2!

const rsLengthDiv3 = rucksacks.length / 3;
const rucksackGroups = [];
let currentRucksackID = 0;

const commonCharactersListP2 = [];

// Create a new array holding smaller arrays of 3 rucksacks each (a group)
for (let i = 0; i < rsLengthDiv3; i++) {
    let currentGroup = [
        rucksacks[currentRucksackID],
        rucksacks[currentRucksackID + 1],
        rucksacks[currentRucksackID + 2],
    ];

    rucksackGroups.push(currentGroup);
    currentRucksackID += 3;
}

// Compare each rucksack in each group to extract the common item
rucksackGroups.forEach(group => {
    let uniqueOne = [...new Set(group[0])];
    let uniqueTwo = [...new Set(group[1])];
    let uniqueThree = [...new Set(group[2])];
    let commonItem = "";

    // Sort through both sides of the rucksack's unique values to see 
    uniqueOne.some(value => {
        // Check for a match from every item of the uniqueRight array
        uniqueTwo.some(item => {
            if (value === item) {
                uniqueThree.some(item2 => {
                    if (value === item2) {
                        commonItem = value;
                        return true;
                    }
                });
            }
        });

        if (commonItem.length > 0) return true;
    });

    //console.log("<<", uniqueOne, uniqueTwo, uniqueThree, commonItem, ">>");
    commonCharactersListP2.push(commonItem);
});

// Calculate the value of each common character, and add it to the total
var totalPointsP2 = 0;
commonCharactersListP2.forEach(character => {
    totalPointsP2 += characterValueReference.indexOf(character);
});

console.log({totalPointsP2});
