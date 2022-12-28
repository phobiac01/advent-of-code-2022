console.log("Advent of Code 2022 - Day 6 \n============================");
// ================================================
const fs = require('fs')
const path = require('path')

var datastreamBuffer = fs.readFileSync(path.resolve(__dirname, '../inputs/day6_input.txt'), 'utf8').split('');
var sequenceBuffer = [];
var totalProcessed = 0;

// Set this variable to match the target number of consecutive characters that indicates a marker block
const consecutiveTargetValue = 14;

datastreamBuffer.some((character, index) => {
    // Extract all unique values from the buffer
    var uniqueValues = [...new Set(sequenceBuffer.join())].join().replaceAll(',', '');

    console.log({ index }, sequenceBuffer, uniqueValues, "\n---");

    // If the count of the unique values matches the target value, exit the loop (our unique character chunk has been found!)
    if (uniqueValues.length == consecutiveTargetValue) return true;

    // Add the next character to the sequence buffer
    sequenceBuffer.push(character);
    totalProcessed++;

    // Drop off the first character in the buffer to keep the buffer from growing past the target value
    if (sequenceBuffer.length > consecutiveTargetValue) sequenceBuffer.shift();
});

console.log({ totalProcessed });
