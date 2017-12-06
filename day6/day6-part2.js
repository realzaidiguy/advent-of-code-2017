// Day 6 Part 2 challenge - Details/Instructions at the bottom
// Run this file via node

// Get the puzzle input (provided)
var puzzleInput = `5	1	10	0	1	7	13	14	3	12	8	10	7	12	0	6`;

// test case - gives result of 5
// var puzzleInput = `0	2	7	0`

// convert the provided input values into a memory bank state array
var memoryBankStateArray = puzzleInput.split("\t").map(Number);

// convert the array into a string we can use to store and compare
var memoryBankStateString = memoryBankStateArray.join(',');

// set up our cycle counter
var count = 0;

// set up object that will store all the memory bank states
var allStatesObject = {};

// while the current state has never previously existed...
while (!(allStatesObject[memoryBankStateString])) {

    // in allStatesObject create a new key equal to the current
    // state and set its value to the current cycle count
    allStatesObject[memoryBankStateString] = count;

    // get the index of the highest block count in the bank so
    // it can be distributed to other blocks
    var highestValueIndex = memoryBankStateArray.indexOf(Math.max(...memoryBankStateArray));

    // set the value that will be distributed
    var valueToDistribute = memoryBankStateArray[highestValueIndex];

    // set the value of the location that was the max to zero
    memoryBankStateArray[highestValueIndex] = 0;

    // start distributing the value and continue until it is 0
    while (valueToDistribute > 0) {

        // move forward one index
        highestValueIndex += 1;

        // if we have reached the end of the array then start over
        if (highestValueIndex >= memoryBankStateArray.length) {
            highestValueIndex = 0;
        }

        // increase the value at the new position by 1
        memoryBankStateArray[highestValueIndex] += 1;

        // reduce the amount we're distributing by 1;
        valueToDistribute -= 1;

    }

    // redefine the memory bank state string because the array has
    // changed so we can iterate again
    memoryBankStateString = memoryBankStateArray.join(',');

    // increment our cycle counter by 1 because this iteration is done
    count += 1;
}

// find the index of the first time the final state string occurred
highestValueIndex = allStatesObject[memoryBankStateString];

// Repeat cycle equals final total cycles minus the first occurrance
console.log("repeat cycle:", count - highestValueIndex);

/*

http://adventofcode.com/2017/day/6

--- Day 6: Memory Reallocation ---
--- Part Two ---

Out of curiosity, the debugger would also like to know the size of the loop: starting from a state that has already been seen, how many block redistribution cycles must be performed before that same state is seen again?

In the example above, 2 4 1 2 is seen again after four cycles, and so the answer in that example would be 4.

How many cycles are in the infinite loop that arises from the configuration in your puzzle input?

*/