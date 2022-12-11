console.log("Advent of Code 2022 - Day 4 \n============================");
// ================================================
const fs = require('fs')
const path = require('path')

const allAssignments = fs.readFileSync(path.resolve(__dirname, '../inputs/day4_input.txt'), 'utf8');
const assignmentPairs = allAssignments.split('\n');

var fullOverlapCount = 0;
var partialOverlapCount = 0;
var noOverlapCount = 0;

// Iterate some checks over each pair of ranges
assignmentPairs.forEach(pair => {
    let bothPairs = pair.split(',');
    let leftPair = bothPairs[0].split('-').map(value => parseInt(value));
    let rightPair = bothPairs[1].split('-').map(value => parseInt(value));

    // Check if the right pair is fully in the left, then vice-versa
    if (leftPair[0] <= rightPair[0] && leftPair[1] >= rightPair[1]) {
        console.log("__ Full Overlap: RwithinL", leftPair, rightPair);
        fullOverlapCount ++;
    } else if (rightPair[0] <= leftPair[0] && rightPair[1] >= leftPair[1]) {
        console.log("__ Full Overlap: LwithinR", leftPair, rightPair);
        fullOverlapCount ++;
    // Check to see if there is NO overlap between the two ranges
    } else if (leftPair[0] > rightPair[1] || rightPair[0] > leftPair[1]) {
        console.log("XX NO FULL OVERLAP", leftPair, rightPair);
        noOverlapCount++;
    } else {
        console.log("][ PARTIAL OVERLAP", leftPair, rightPair);
        partialOverlapCount++;
    }
});

console.log(
    {fullOverlapCount}, 
    {partialOverlapCount}, 
    "Some Overlap:", 
    (fullOverlapCount + partialOverlapCount), 
    {noOverlapCount}
);
