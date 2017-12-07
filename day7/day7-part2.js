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
for (var i=0; i<contentArray.length; i++) {
    var removeIndex = contentArray[i].indexOf('');
    if (removeIndex !== -1) {
        contentArray[i].splice(removeIndex, 1);
    }
}

console.log(contentArray);
console.log("Still working on it - will come back to it when there is free time...");
/*

http://adventofcode.com/2017/day/7

--- Day 7: Recursive Circus ---
--- Part Two ---

The programs explain the situation: they can't get down. Rather, they could get down, if they weren't expending all of their energy trying to keep the tower balanced. Apparently, one program has the wrong weight, and until it's fixed, they're stuck here.

For any program holding a disc, each program standing on that disc forms a sub-tower. Each of those sub-towers are supposed to be the same weight, or the disc itself isn't balanced. The weight of a tower is the sum of the weights of the programs in that tower.

In the example above, this means that for ugml's disc to be balanced, gyxo, ebii, and jptl must all have the same weight, and they do: 61.

However, for tknk to be balanced, each of the programs standing on its disc and all programs above it must each match. This means that the following sums must all be the same:

ugml + (gyxo + ebii + jptl) = 68 + (61 + 61 + 61) = 251
padx + (pbga + havc + qoyq) = 45 + (66 + 66 + 66) = 243
fwft + (ktlj + cntj + xhth) = 72 + (57 + 57 + 57) = 243

As you can see, tknk's disc is unbalanced: ugml's stack is heavier than the other two. Even though the nodes above ugml are balanced, ugml itself is too heavy: it needs to be 8 units lighter for its stack to weigh 243 and keep the towers balanced. If this change were made, its weight would be 60.

Given that exactly one program is the wrong weight, what would its weight need to be to balance the entire tower?

*/