console.log("Advent of Code 2022 - Day 2");
// ================================================

const fs = require('fs')
const path = require('path')

const roundsInput = fs.readFileSync(path.resolve(__dirname, '../inputs/day2_input.txt'), 'utf8')

const rounds = roundsInput.split('\n');
var roundResults = [];

rounds.forEach(round => {
    let opponentsPlay = round[0];
    let myPlay = round[2];
    
    let roundResult = {
        roundPointsTotal : 0,
        roundWinLoss : "Na",
        opponentsPlay,
        myPlay
    }

    switch (opponentsPlay) {
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
    else if (myPlay == 'Y')  roundResult.roundPointsTotal += 2; // Paper gives 2 points
    else if (myPlay == 'Z')  roundResult.roundPointsTotal += 3; // Scissors gives 3 points

    // Give extra points based on outcome of the round
    if (roundResult.roundWinLoss == "Win") roundResult.roundPointsTotal += 6;
    else if (roundResult.roundWinLoss == "Tie") roundResult.roundPointsTotal += 3;

    console.log(roundResult);
    roundResults.push(roundResult);
});

let totalScore = roundResults.reduce(function(total, roundResult) {
    return total + roundResult.roundPointsTotal;
}, 0);

console.log({totalScore});
console.log("Rounds: " + rounds.length);

