// Day 5 Part 2 challenge - Details/Instructions at the bottom
// Run this file via node

// require the fs node package
var fs = require("fs");

// read in the data file
var puzzleInput = fs.readFileSync('./input.txt', 'utf8');

// Split the puzzle input into an array by splitting on the line break
// and map the string elements to number elements
let puzzleInputArray = puzzleInput.split("\n").map(Number);

// Start the counter for tallying steps needed to escape
let count = 0;

// Set current position
let currentPosition = 0;

// Keep running the loop as long as we are still within the array
while (currentPosition <= puzzleInputArray.length - 1) {

    // tempPosition holds the current position so we can refer to it after moving
    // the current position
    let tempPosition = currentPosition;

    // Move the current position by the value of the current position element
    currentPosition += puzzleInputArray[currentPosition];

    // Change the element value at the prior position we were at by -1 if the element value was >=3, otherwise by +1
    if (puzzleInputArray[tempPosition] >= 3) {
        puzzleInputArray[tempPosition] -= 1;
    } else {
        puzzleInputArray[tempPosition] += 1;
    }

    // And since we have completed a move, increment our steps counter by 1
    count += 1;

}

// Log out the count of steps to escape
console.log(count);

/*

http://adventofcode.com/2017/day/5

--- Day 5: A Maze of Twisty Trampolines, All Alike ---
--- Part Two ---

An urgent interrupt arrives from the CPU: it's trapped in a maze of jump instructions, and it would like assistance from any programs with spare cycles to help find the exit.

The message includes a list of the offsets for each jump. Jumps are relative: -1 moves to the previous instruction, and 2 skips the next one. Start at the first instruction in the list. The goal is to follow the jumps until one leads outside the list.

In addition, these instructions are a little strange; after each jump, the offset of that instruction increases by 1. So, if you come across an offset of 3, you would move three instructions forward, but change it to a 4 for the next time it is encountered.

For example, consider the following list of jump offsets:

0
3
0
1
-3

Now, the jumps are even stranger: after each jump, if the offset was three or more, instead decrease it by 1. Otherwise, increase it by 1 as before.

Using this rule with the above example, the process now takes 10 steps, and the offset values after finding the exit are left as 2 3 2 3 -1.

How many steps does it now take to reach the exit?

*/