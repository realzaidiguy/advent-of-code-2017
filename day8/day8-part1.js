// Day 8 Part 1 challenge - Details/Instructions at the bottom
// Run this file via node

// require the fs node package
var fs = require("fs");

// read in the data file
var givenData = fs.readFileSync('./input.txt', 'utf8');

// split content into an array
var dataArray = givenData.split('\n');

// create an empty registers object
var registers = {};

// loop over the data array
for (var i=0; i<dataArray.length; i++) {
    
    // split the row into an instructions array so instruction structure is:
    // registerToModify-modifyer-amountToModifyBy-if-conditionalRegister-comparator-conditionalComparison
    // then instructions array will have the following indeces
    // 0: registerToModify
    // 1: modifyer - inc or dec
    // 2: amountToModifyBy
    // 3: if
    // 4: conditionalRegister
    // 5: comparator >, <, >=, ==, <=, !=
    // 6: conditionalComparison
    var instructions = dataArray[i].split(' ');

    // define the above explained variables
    var registerToModify = instructions[0];
    var modifyer = instructions[1];
    var amountToModifyBy = parseInt(instructions[2]);
    var conditionalRegister = instructions[4];
    var comparator = instructions[5];
    var conditionalComparison = parseInt(instructions[6]);

    // if the registerToModify doesn't exist in registers then add it and set it to 0
    if (!(registerToModify in registers)) {
        registers[registerToModify] = 0;
    }

    // if the conditionalRegister doesn't exist in registers then add it and set it to 0
    if (!(conditionalRegister in registers)) {
        registers[conditionalRegister] = 0;
    }

    // switch on the comparator, then add or subtract amountToModifyBy from the registerToModifyBy
    switch (comparator) {
        case ">":
            if (registers[conditionalRegister] > conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
            }
            break;
        case "<":
            if (registers[conditionalRegister] < conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
            }
            break;
        case "==":
            if (registers[conditionalRegister] === conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
            }
            break;
        case ">=":
            if (registers[conditionalRegister] >= conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
            }
            break;
        case "<=":
            if (registers[conditionalRegister] <= conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
            }
            break;
        case "!=":
            if (registers[conditionalRegister] !== conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
            }
            break;
        default:
            console.log("no case matches");
            break;
    }

}

// iterate over the registers, checking key values,
// and holding on to the highest value
var isHighest = 0;
for (keys in registers) {
    if (registers[keys] > isHighest) {
        isHighest = registers[keys];
    }
}

// Log the highest value in the register
console.log("Highest value in the final registers:", isHighest);

/*

http://adventofcode.com/2017/day/8

--- Day 8: I Heard You Like Registers ---
--- Part One ---

You receive a signal directly from the CPU. Because of your recent assistance with jump instructions, it would like you to compute the result of a series of unusual register instructions.

Each instruction consists of several parts: the register to modify, whether to increase or decrease that register's value, the amount by which to increase or decrease it, and a condition. If the condition fails, skip the instruction without modifying the register. The registers all start at 0. The instructions look like this:

b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10
These instructions would be processed as follows:

Because a starts at 0, it is not greater than 1, and so b is not modified.
a is increased by 1 (to 1) because b is less than 5 (it is 0).
c is decreased by -10 (to 10) because a is now greater than or equal to 1 (it is 1).
c is increased by -20 (to -10) because c is equal to 10.
After this process, the largest value in any register is 1.

You might also encounter <= (less than or equal to) or != (not equal to). However, the CPU doesn't have the bandwidth to tell you what all the registers are named, and leaves that to you to determine.

What is the largest value in any register after completing the instructions in your puzzle input?

*/