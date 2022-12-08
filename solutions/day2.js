console.log("Advent of Code 2022 - Day 2 \n============================");
// ================================================
const fs = require('fs')
const path = require('path')

const roundsInput = fs.readFileSync(path.resolve(__dirname, '../inputs/day2_input.txt'), 'utf8')

const rounds = roundsInput.split('\n');
var roundResults = [];

rounds.forEach(round => {
    let roundResult = {
        roundPointsTotal: 0,
        roundWinLoss: "Na",
        opponentsPlay: round[0],
        myPlay: round[2]
    }

    // partOneSolutionLogic(roundResult);
    partTwoSolutionLogic(roundResult);

    // Give extra points based on outcome of the round
    if (roundResult.roundWinLoss == "Win") roundResult.roundPointsTotal += 6;
    else if (roundResult.roundWinLoss == "Tie") roundResult.roundPointsTotal += 3;

    roundResults.push(roundResult);
});

// Calculate the sum of all round point totals
let totalScore = roundResults.reduce(function (total, roundResult) {
    return total + roundResult.roundPointsTotal;
}, 0);

console.log("Rounds: " + rounds.length);
console.log("Total Score: " + totalScore);

// ==========================================================

// Using the logic in Part 1 where X, Y, and Z indicate which style to play for the round
function partOneSolutionLogic(roundResult) {
    let myPlay = roundResult.myPlay;

    switch (roundResult.opponentsPlay) {
        case 'A': // Opponent plays Rock
            // Self plays Rock
            if (myPlay == 'X') roundResult.roundWinLoss = "Tie";
            // Self plays Paper
            if (myPlay == 'Y') roundResult.roundWinLoss = "Win";
            // Self plays Scissors
            if (myPlay == 'Z') roundResult.roundWinLoss = "Loss";
            break;

        case 'B': // Opponent plays Paper
            // Self plays Rock
            if (myPlay == 'X') roundResult.roundWinLoss = "Loss";
            // Self plays Paper
            if (myPlay == 'Y') roundResult.roundWinLoss = "Tie";
            // Self plays Scissors
            if (myPlay == 'Z') roundResult.roundWinLoss = "Win";
            break;

        case 'C': // Opponent plays Scissors
            // Self plays Rock
            if (myPlay == 'X') roundResult.roundWinLoss = "Win";
            // Self plays Paper
            if (myPlay == 'Y') roundResult.roundWinLoss = "Loss";
            // Self plays Scissors
            if (myPlay == 'Z') roundResult.roundWinLoss = "Tie";
            break;

        default:
            roundResults.push("Malformed Play");
            break;
    }

    // Give points based on play chosen during the round
    if (myPlay == 'X') roundResult.roundPointsTotal += 1; // Rock gives 1 point
    else if (myPlay == 'Y') roundResult.roundPointsTotal += 2; // Paper gives 2 points
    else if (myPlay == 'Z') roundResult.roundPointsTotal += 3; // Scissors gives 3 points
}

// Using the logic in Part 2 where X, Y, and Z dictate the outcome of the round instead 
function partTwoSolutionLogic(roundResult) {
    if (roundResult.myPlay == 'X') roundResult.roundWinLoss = "Lose";
    else if (roundResult.myPlay == 'Y') roundResult.roundWinLoss = "Tie";
    else if (roundResult.myPlay == 'Z') roundResult.roundWinLoss = "Win";

    let roundOutcome = roundResult.roundWinLoss;

    switch (roundResult.opponentsPlay) {
        case 'A': // Opponent plays Rock
            if (roundOutcome == 'Tie') roundResult.myPlay = "Rock";
            else if (roundOutcome == 'Win') roundResult.myPlay = "Paper";
            else if (roundOutcome == 'Lose') roundResult.myPlay = "Scissors";
            break;

        case 'B': // Opponent plays Paper
            if (roundOutcome == 'Lose') roundResult.myPlay = "Rock";
            else if (roundOutcome == 'Tie') roundResult.myPlay = "Paper";
            else if (roundOutcome == 'Win') roundResult.myPlay = "Scissors";
            break;

        case 'C': // Opponent plays Scissors
            if (roundOutcome == 'Win') roundResult.myPlay = "Rock";
            else if (roundOutcome == 'Lose') roundResult.myPlay = "Paper";
            else if (roundOutcome == 'Tie') roundResult.myPlay = "Scissors";
            break;

        default:
            roundResults.push("Malformed Play");
            break;
    }

    // Give points based on play chosen during the round
    if (roundResult.myPlay == 'Rock') roundResult.roundPointsTotal += 1; // Rock gives 1 point
    else if (roundResult.myPlay == 'Paper') roundResult.roundPointsTotal += 2; // Paper gives 2 points
    else if (roundResult.myPlay == 'Scissors') roundResult.roundPointsTotal += 3; // Scissors gives 3 points
}
