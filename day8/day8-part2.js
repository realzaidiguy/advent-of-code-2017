// Day 8 Part 2 challenge - Details/Instructions at the bottom
// Run this file via node

// require the fs node package
var fs = require("fs");

// read in the data file
var givenData = fs.readFileSync('./input.txt', 'utf8');

// split content into an array
var dataArray = givenData.split('\n');

// create an empty registers object
var registers = {};

// set up the variable that will keep track of the highest value
var isHighest = 0;

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

    // switch on the comparator, then add or subtract amountToModifyBy from the registerToModifyBy,
    // then also see if the modified register is the newest high value of any register with the
    // checkHighest function
    switch (comparator) {
        case ">":
            if (registers[conditionalRegister] > conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
                checkHighest(registers[registerToModify]);
            }
            break;
        case "<":
            if (registers[conditionalRegister] < conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
                checkHighest(registers[registerToModify]);
            }
            break;
        case "==":
            if (registers[conditionalRegister] === conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
                checkHighest(registers[registerToModify]);
            }
            break;
        case ">=":
            if (registers[conditionalRegister] >= conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
                checkHighest(registers[registerToModify]);
            }
            break;
        case "<=":
            if (registers[conditionalRegister] <= conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
                checkHighest(registers[registerToModify]);
            }
            break;
        case "!=":
            if (registers[conditionalRegister] !== conditionalComparison) {
                if (modifyer === "inc") {
                    registers[registerToModify] += amountToModifyBy;
                } else if (modifyer === "dec") {
                    registers[registerToModify] -= amountToModifyBy;
                }
                checkHighest(registers[registerToModify]);
            }
            break;
        default:
            console.log("no case matches");
            break;
    }

}

// function to update isHighest to the higher of either the current value
// or the register value passed in
function checkHighest(value) {
    if (isHighest < value) {
        isHighest = value;
    }
}

// Log the highest value ever held during operations
console.log("Highest value ever held:", isHighest);

/*

http://adventofcode.com/2017/day/8

--- Day 8: I Heard You Like Registers ---
--- Part Two ---

To be safe, the CPU also needs to know the highest value held in any register during this process so that it can decide how much memory to allocate to these operations. For example, in the above instructions, the highest value ever held was 10 (in register c after the third instruction was evaluated).

*/