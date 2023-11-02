var assert = require('assert');

// Create multiple short tests for a person learning how objects work in javascript

// 1. Create a variable called `object` and assign the value of an empty object to it

// Assert that the value of `object` is an empty object
assert.deepEqual(object, {});

// 2. Create a variable called `length` and assign the value of the length of `object` to it

// Assert that the value of `length` is 0
assert.equal(length, 0);

// 3. Create a variable called `firstItem` and assign the value of the first item of `object` to it

// Assert that the value of `firstItem` is undefined
assert.equal(firstItem, undefined);

//  4. Create a variable called `lastItem` and assign the value of the last item of `object` to it

// Assert that the value of `lastItem` is undefined
assert.equal(lastItem, undefined);

//  5. Create a variable called `middleItem` and assign the value of the middle item of `object` to it

// Assert that the value of `middleItem` is undefined
assert.equal(middleItem, undefined);

//  6. Create a variable called `object2` and assign the value of an object with 1 item in it to it

// Assert that the value of `object2` is an object with 1 item in it
assert.deepEqual(object2, { 1: 1 });

//  7. Create a variable called `length2` and assign the value of the length of `object2` to it

// Assert that the value of `length2` is 1
assert.equal(length2, 1);

//  8. Create a variable called `firstItem2` and assign the value of the first item of `object2` to it

// Assert that the value of `firstItem2` is 1
assert.equal(firstItem2, 1);

//  9. Create a variable called `lastItem2` and assign the value of the last item of `object2` to it

// Assert that the value of `lastItem2` is 1
assert.equal(lastItem2, 1);

// 10. Create an object called person, with the name "max" and the age 27

// Assert that the value of `person` is an object with the name "max" and the age 27
assert.deepEqual(person, { name: 'max', age: 27 });

// 11. Modify the person object to have the name "max robles"

// Assert that the value of `person` is an object with the name "max robles" and the age 27
assert.deepEqual(person, { name: 'max robles', age: 27 });

// 12. Add a key to the person object called "height" with the value of 6

// Assert that the value of `person` is an object with the name "max robles", the age 27, and the height 6
assert.deepEqual(person, { name: 'max robles', age: 27, height: 6 });

// 13. Delete the age property from the person object

// Assert that the value of `person` is an object with the name "max robles" and the height 6
assert.deepEqual(person, { name: 'max robles', height: 6 });

// 14. Create a variable called `person2` and assign the value of an object with the name "max" and the age 27 to it

// Assert that the value of `person2` is an object with the name "max" and the age 27
assert.deepEqual(person2, { name: 'max', age: 27 });

