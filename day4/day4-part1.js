// Day 4 Part 1 challenge - Details/Instructions at the bottom
// Run this file via node

// require the fs node package
var fs = require("fs");

// read in the data file
var passphrases = fs.readFileSync('./input.txt', 'utf8');

// Split the passphrases into an array by splitting on the line break
let splitPassphrases = passphrases.split("\n");

// Start the counter for tallying valid passphrases
let count = 0

// iterate over the array of passphrases, row by row
for (let j=0; j<splitPassphrases.length; j++) {

    // Turn the row string into an array of words
    let checkArray = splitPassphrases[j].trim().split(" ");

    // check if the array of the current row has duplicates
    // and tally the ones that don't
    if (!hasDuplicates(checkArray)) {
        count++;
    }
}

// function for checking for duplicates
// code snipped from Stack Overflow
function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}

// Log out the count of total rows without duplicates which
// reflects the total number of valid passphrases
console.log(count);

/*

http://adventofcode.com/2017/day/4

--- Day 4: High-Entropy Passphrases ---
--- Part One ---

A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.

To ensure security, a valid passphrase must contain no duplicate words.

For example:

aa bb cc dd ee is valid.
aa bb cc dd aa is not valid - the word aa appears more than once.
aa bb cc dd aaa is valid - aa and aaa count as different words.

The system's full passphrase list is available as your puzzle input. 

How many passphrases are valid?

*/