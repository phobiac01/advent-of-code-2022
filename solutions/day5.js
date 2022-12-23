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

console.log(allStacks);

// allStacks[1] = [ "" ];
