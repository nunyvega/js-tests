var assert = require('assert');

// Create multiple short tests for a person learning how arrays work in javascript

// 1. Create a variable called `array` and assign the value of an empty array to it

// Assert that the value of `array` is an empty array
assert.deepEqual(array, []);

// 2. Create a variable called `length` and assign the value of the length of `array` to it

// Assert that the value of `length` is 0
assert.equal(length, 0);

// 3. Create a variable called `firstItem` and assign the value of the first item of `array` to it

// Assert that the value of `firstItem` is undefined
assert.equal(firstItem, undefined);

//  4. Create a variable called `lastItem` and assign the value of the last item of `array` to it

// Assert that the value of `lastItem` is undefined
assert.equal(lastItem, undefined);

//  5. Create a variable called `middleItem` and assign the value of the middle item of `array` to it

// Assert that the value of `middleItem` is undefined
assert.equal(middleItem, undefined);

//  6. Create a variable called `array2` and assign the value of an array with 1 item in it to it

// Assert that the value of `array2` is an array with 1 item in it
assert.deepEqual(array2, [1]);

//  7. Create a variable called `length2` and assign the value of the length of `array2` to it

// Assert that the value of `length2` is 1
assert.equal(length2, 1);

//  8. Create a variable called `firstItem2` and assign the value of the first item of `array2` to it

// Assert that the value of `firstItem2` is 1
assert.equal(firstItem2, 1);

//  9. Create a variable called `lastItem2` and assign the value of the last item of `array2` to it

// Assert that the value of `lastItem2` is 1
assert.equal(lastItem2, 1);

//  10. Create a variable called `middleItem2` and assign the value of the middle item of `array2` to it

// Assert that the value of `middleItem2` is 1
assert.equal(middleItem2, 1);

//  11. Create a variable called `array3` and assign the value of an array with 2 items in it to it

// Assert that the value of `array3` is an array with 2 items in it
assert.deepEqual(array3, [1, 2]);

//  12. Create a variable called `length3` and assign the value of the length of `array3` to it

// Assert that the value of `length3` is 2
assert.equal(length3, 2);

//  13. Push the value 3 into `array3`

// Assert that the value of `array3` is an array with 3 items in it
assert.deepEqual(array3, [1, 2, 3]);


// 14. Pop the value out of `array3`

// Assert that the value of `array3` is an array with 2 items in it
assert.deepEqual(array3, [1, 2]);

// 15. Delete the first item in `array3`

// Assert that the value of `array3` is an array with 1 item in it
assert.deepEqual(array3, [2]);