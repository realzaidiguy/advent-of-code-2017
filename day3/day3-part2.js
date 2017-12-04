// Day 3 Part 2 challenge - Details/Instructions at the bottom
// Run this file via node

// First the memory spot we want to check
const number_to_check = 277678;

// Fairly difficult problem. However, there's helpful info on the
// sequence here: https://oeis.org/A141481

// Looked at some solutions on reddit at https://www.reddit.com/r/adventofcode/comments/7h7ufl/2017_day_3_solutions/
// Very involved. Come back to it some other day.

/*

http://adventofcode.com/2017/day/2

--- Day 3: Spiral Memory ---
--- Part Two ---

As a stress test on the system, the programs here clear the grid and then store the value 1 in square 1. Then, in the same allocation order as shown above, they store the sum of the values in all adjacent squares, including diagonals.

So, the first few squares' values are chosen as follows:

Square 1 starts with the value 1.
Square 2 has only one adjacent filled square (with value 1), so it also stores 1.
Square 3 has both of the above squares as neighbors and stores the sum of their values, 2.
Square 4 has all three of the aforementioned squares as neighbors and stores the sum of their values, 4.
Square 5 only has the first and fourth squares as neighbors, so it gets the value 5.
Once a square is written, its value does not change. Therefore, the first few squares would receive the following values:

147  142  133  122   59
304    5    4    2   57
330   10    1    1   54
351   11   23   25   26
362  747  806--->   ...

What is the first value written that is larger than your puzzle input?

*/