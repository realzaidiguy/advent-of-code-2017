// Day 7 Part 1 challenge - Details/Instructions at the bottom
// Run this file via node

// require the fs node package
var fs = require("fs");

// read in the data file
var content = fs.readFileSync('./input.txt', 'utf8');

// split content into an array
var contentArray = content.split('\n');

// break each element into array of program names
contentArray.forEach(function (element, index) {
    contentArray[index] = element.split(/[^a-z0-9]+/);
});

// there appear to be empty strings left behind from the
// regex match - remove them
for (var i = 0; i < contentArray.length; i++) {
    var removeIndex = contentArray[i].indexOf('');
    if (removeIndex !== -1) {
        contentArray[i].splice(removeIndex, 1);
    }
}

// assume the first item in the first array is the lowest program
var lowest = contentArray[0][0];
var lowestFound = true;

// start going through the rows of program data
do {
    // first set the lowestFound flag to true
    lowestFound = true;

    // iterate over the rows
    for (var i=0; i<contentArray.length; i++) {

        // if the previous lowest program is not the first name in the row
        // then it cannot be the lowest program, so change the lowest
        // to be the first item in the new row and reset our lowestfound
        // flag to false
        if (contentArray[i].indexOf(lowest) > 0) {
            lowest = contentArray[i][0];
            lowestFound = false;
        }
    }

// run the loop as long as we haven't found the lowest program
} while (lowestFound === false);

// log out the lowest program in the tower
console.log(lowest);

/*

http://adventofcode.com/2017/day/7

--- Day 7: Recursive Circus ---
--- Part One ---

Wandering further through the circuits of the computer, you come upon a tower of programs that have gotten themselves into a bit of trouble. A recursive algorithm has gotten out of hand, and now they're balanced precariously in a large tower.

One program at the bottom supports the entire tower. It's holding a large disc, and on the disc are balanced several more sub-towers. At the bottom of these sub-towers, standing on the bottom disc, are other programs, each holding their own disc, and so on. At the very tops of these sub-sub-sub-...-towers, many programs stand simply keeping the disc below them balanced but with no disc of their own.

You offer to help, but first you need to understand the structure of these towers. You ask each program to yell out their name, their weight, and (if they're holding a disc) the names of the programs immediately above them balancing on that disc. You write this information down (your puzzle input). Unfortunately, in their panic, they don't do this in an orderly fashion; by the time you're done, you're not sure which program gave which information.

For example, if your list is the following:

pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)
...then you would be able to recreate the structure of the towers that looks like this:

                gyxo
              /
         ugml - ebii
       /      \
      |         jptl
      |
      |         pbga
     /        /
tknk --- padx - havc
     \        \
      |         qoyq
      |
      |         ktlj
       \      /
         fwft - cntj
              \
                xhth

In this example, tknk is at the bottom of the tower (the bottom program), and is holding up ugml, padx, and fwft. Those programs are, in turn, holding up other programs; in this example, none of those programs are holding up any other programs, and are all the tops of their own towers. (The actual tower balancing in front of you is much larger.)

Before you're ready to help them, you need to make sure your information is correct. What is the name of the bottom program?

*/