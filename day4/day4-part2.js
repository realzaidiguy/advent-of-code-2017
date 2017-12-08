// Day 4 Part 2 challenge - Details/Instructions at the bottom
// Run this file via node

// require the fs node package
var fs = require("fs");

// read in the data file
var passphrases = fs.readFileSync('./input.txt', 'utf8');

// Split the passphrases into an array by splitting on the line break
let splitPassphrases = passphrases.split("\n");

// Start the counter for tallying valid passphrases
var count = 0

// iterate over the array of passphrases, row by row
for (var j=0; j<splitPassphrases.length; j++) {

    // Turn the row string into an array of words
    let checkArray = splitPassphrases[j].trim().split(" ");

    // Set up an empty sortedArray that will hold the values
    // of checkArray, but with each element sorted alphabetically
    let sortedArray = [];

    // iterate over the array, and sort each element in the array
    // so that we can check for duplicates in the sorted array
    // which will account for anagram copies too
    for (let l=0; l<checkArray.length; l++) {
        sortedArray[l] = checkArray[l].split("").sort().join("");
    }

    // check if the sorted array of the current row has duplicates
    // and tally the ones that don't
    if (!hasDuplicates(sortedArray)) {
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
// reflects the total number of valid passphrases, after also
// accounting for anagrams
console.log(count);

/*

http://adventofcode.com/2017/day/4

--- Day 4: High-Entropy Passphrases ---
--- Part Two ---

For added security, yet another system policy has been put in place. Now, a valid passphrase must contain no two words that are anagrams of each other - that is, a passphrase is invalid if any word's letters can be rearranged to form any other word in the passphrase.

For example:

abcde fghij is a valid passphrase.
abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
iiii oiii ooii oooi oooo is valid.
oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.

Under this new system policy, how many passphrases are valid?

*/