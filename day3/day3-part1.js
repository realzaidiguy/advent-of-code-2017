// Day 3 Part 1 challenge - Details/Instructions at the bottom
// Run this file via node

// First the memory spot we want to check
const number_to_check = 277678;

// Before beginning it will be helpful to draw out the spiral grid of
// memory locations, from 1 to at least 81 - get basic starting pattern
// from the instructions at the bottom.

// Think of the spiral as a series of squares. The bottom right spots
// of the squares are powers of odd numbers - 1^2, 3^2, 5^2, 7^2, 9^2
// We will call this spot the se_corner of the square
// and center_of_side will be the mid-point of the side of that square.
// Just declare them for now.
let se_corner = 0;
let center_of_side = 0;

// Let's store the square root of the number we're checking for convenience
let square_root = Math.sqrt(number_to_check);

// The square root can either be a whole number, or a not. 
if (square_root !== Math.floor(square_root)) {

    // In the case it's not a whole number, floor the square root
    // and check if it's odd or even. Since we know the se_corner is
    // always a power of an odd number (see above), then if the square
    // root is even, add one then square it. Otherwise if it's odd then
    // add two then square it - so that we find what the ending
    // value of that square is at the next se_corner spot.
    if (Math.floor(square_root) % 2 === 0) {
        se_corner = Math.pow(Math.floor(square_root) + 1, 2);
    } else {
        se_corner = Math.pow(Math.floor(square_root) + 2, 2)
    }

} else {
    
    // In case the square root is a whole number, it's either going
    // to be the square of an odd or even number. If it's the square
    // of an even number, then we must add one and square it to get
    // the se_corner. However, if it's odd, then the number we are
    // checking is already the se_corner of the square.
    if (square_root % 2 === 0) {
        se_corner = (Math.pow(square_root + 1, 2));
    } else {
        se_corner = number_to_check;
    }
}

// Once we have the se_corner, we can get the length of the side
// of it's square by simply checking the square root (length x width)
let length_of_side = Math.sqrt(se_corner);

// The perpendicular distance is going to be the distance from the mid-point
// of the side to the memory location 1 point. We can get this by deducting
// 1 from the length of the side, and dividing it by two.
let perpendicular_distance_from_memory1 = (length_of_side - 1) / 2;

// The memory locations at the other corners of the square are simply
// going to be the prior corner, minus one less then the length of
// the side.
let sw_corner = se_corner - (length_of_side - 1);
let nw_corner = sw_corner - (length_of_side - 1);
let ne_corner = nw_corner - (length_of_side - 1);

// Next identify which side of the square (top/bottom/left/right) the
// number falls on. We can check this by comparing the number against
// the memory locations at each corner of the square. Then, once we know
// which side it's on, we can get the mid-point of that particular side.

// Is it on the eastern/right side?
if (number_to_check < ne_corner) {
    center_of_side = ne_corner - ((length_of_side - 1) / 2);

// Is it on the northern/top side?
} else if (number_to_check < nw_corner) {
    center_of_side = nw_corner - ((length_of_side - 1) / 2);

// Is it on the western/left side?
} else if (number_to_check < sw_corner) {
    center_of_side = sw_corner - ((length_of_side - 1) / 2);

// Is it on the southern/bottom side?
} else {
    center_of_side = se_corner - ((length_of_side - 1) / 2);
}

// Once we have the center of the side the number is on, we can simply add the distance
// from the number to the midpoint, plus the perpendicular distance, to get the
// total distance.
let total_distance_from_memory1 = perpendicular_distance_from_memory1 + (number_to_check - center_of_side);

// console.log("number_to_check", number_to_check);
// console.log("se_corner", se_corner);
// console.log("sw_corner", sw_corner);
// console.log("nw_corner", nw_corner);
// console.log("ne_corner", ne_corner);
// console.log("center_of_side", center_of_side);
// console.log("length_of_side", length_of_side);
// console.log("perpendicular_distance_from_memory1", perpendicular_distance_from_memory1);

// Finally let's log out the total distance to memory location 1
console.log("total_distance_from_memory1", total_distance_from_memory1);

/*

http://adventofcode.com/2017/day/3

--- Day 3: Spiral Memory ---
--- Part One ---

You come across an experimental new kind of memory stored on an infinite two-dimensional grid.

Each square on the grid is allocated in a spiral pattern starting at a location marked 1 and then counting up while spiraling outward. For example, the first few squares are allocated like this:

17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...

While this is very space-efficient (no squares are skipped), requested data must be carried back to square 1 (the location of the only access port for this memory system) by programs that can only move up, down, left, or right. They always take the shortest path: the Manhattan Distance between the location of the data and square 1.

For example:

Data from square 1 is carried 0 steps, since it's at the access port.
Data from square 12 is carried 3 steps, such as: down, left, left.
Data from square 23 is carried only 2 steps: up twice.
Data from square 1024 must be carried 31 steps.

How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?

*/