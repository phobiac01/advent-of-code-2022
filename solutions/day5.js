console.log("Advent of Code 2022 - Day 5 \n============================");
// ================================================
const fs = require('fs')
const path = require('path')

var unparsedInstructions = fs.readFileSync(path.resolve(__dirname, '../inputs/day5_input.txt'), 'utf8');

// Format the input file to parse and seperate each row into individual instruction sets
const parsedInstructions = unparsedInstructions
    .replaceAll(' ', '')
    .replaceAll('move', '')
    .replaceAll('from', '-')
    .replaceAll('to', '-')
    .split('\n')
    .map((value) => value.split('-'));

// Populate the allStacks variable with the initial state of each stack / crate
var allStacks = [
    "JHGMZNTF",
    "VWJ",
    "GVLJBTH",
    "BPJNCDVL",
    "FWSMPRG",
    "GHCFBNVM",
    "DHGMR",
    "HNMVZD",
    "GNFH",
];

const solutionLogic = "part2";

// Apply each step to the allStacks cache [ number, from-stack, to-stack]
parsedInstructions.forEach(instruction => {
    var number = instruction[0];
    var fromStack = instruction[1] - 1;
    var toStack = instruction[2] - 1;
    var targetCrates = allStacks[fromStack].substring(allStacks[fromStack].length - number);

    console.log(instruction, "Before:", allStacks[fromStack], "|", allStacks[toStack]);

    // Remove the selected crates off the top of the fromStack
    allStacks[fromStack] = allStacks[fromStack].substring(0, allStacks[fromStack].length - number);

    if (solutionLogic == "part1") {
        // Add each selected crate to the new stack, processing from top to bottom
        targetCrates = targetCrates.split("").reverse();
        targetCrates.forEach(crate => allStacks[toStack] += crate);
    } else {
        // Add all of the selected crates to the new stack, preserving their order
        targetCrates = targetCrates.split("");
        targetCrates.forEach(crate => allStacks[toStack] += crate);
    }

    console.log(instruction, "After:", allStacks[fromStack], "|", allStacks[toStack]);
    console.log("-");
});

console.log(`====== SL: ${solutionLogic} ======\n`, allStacks);

var topCrates = "";
allStacks.forEach(stack => {
    topCrates += stack[stack.length - 1];
});

console.log({topCrates});
