var assert = require("assert");

function runTests() {
	// 1. Create a variable called `object` and assign the value of an empty object to it
	try {
		assert.deepEqual(object, {});
		console.log("Test 1 passed!");
	} catch (error) {
		console.log("Test 1 failed :(");
		return;
	}

	// 2. Create a variable called `length` and assign the value of the length of `object` to it
	try {
		assert.equal(length, 0);
		console.log("Test 2 passed!");
	} catch (error) {
		console.log("Test 2 failed :(");
		return;
	}

	// 3. Create a variable called `firstItem` and assign the value of the first item of `object` to it
	try {
		assert.equal(firstItem, undefined);
		console.log("Test 3 passed!");
	} catch (error) {
		console.log("Test 3 failed :(");
		return;
	}

	// 4. Create a variable called `lastItem` and assign the value of the last item of `object` to it
	try {
		assert.equal(lastItem, undefined);
		console.log("Test 4 passed!");
	} catch (error) {
		console.log("Test 4 failed :(");
		return;
	}

	// 5. Create a variable called `middleItem` and assign the value of the middle item of `object` to it
	try {
		assert.equal(middleItem, undefined);
		console.log("Test 5 passed!");
	} catch (error) {
		console.log("Test 5 failed :(");
		return;
	}

	// 6. Create a variable called `object2` and assign the value of an object with 1 item in it to it
	try {
		assert.deepEqual(object2, { 1: 1 });
		console.log("Test 6 passed!");
	} catch (error) {
		console.log("Test 6 failed :(");
		return;
	}

	// 7. Create a variable called `length2` and assign the value of the length of `object2` to it
	try {
		assert.equal(length2, 1);
		console.log("Test 7 passed!");
	} catch (error) {
		console.log("Test 7 failed :(");
		return;
	}

	// 8. Create a variable called `firstItem2` and assign the value of the first item of `object2` to it
	try {
		assert.equal(firstItem2, 1);
		console.log("Test 8 passed!");
	} catch (error) {
		console.log("Test 8 failed :(");
		return;
	}

	// 9. Create a variable called `lastItem2` and assign the value of the last item of `object2` to it
	try {
		assert.equal(lastItem2, 1);
		console.log("Test 9 passed!");
	} catch (error) {
		console.log("Test 9 failed :(");
		return;
	}

	// 10. Create an object called person, with the name "max" and the age 27
	try {
		assert.deepEqual(person, { name: "max", age: 27 });
		console.log("Test 10 passed!");
	} catch (error) {
		console.log("Test 10 failed :(");
		return;
	}

	// 11. Modify the person object to have the name "max robles"
	try {
		assert.deepEqual(person, { name: "max robles", age: 27 });
		console.log("Test 11 passed!");
	} catch (error) {
		console.log("Test 11 failed :(");
		return;
	}

	// 12. Add a key to the person object called "height" with the value of 6
	try {
		assert.deepEqual(person, { name: "max robles", age: 27, height: 6 });
		console.log("Test 12 passed!");
	} catch (error) {
		console.log("Test 12 failed :(");
		return;
	}

	// 13. Delete the age property from the person object
	try {
		assert.deepEqual(person, { name: "max robles", height: 6 });
		console.log("Test 13 passed!");
	} catch (error) {
		console.log("Test 13 failed :(");
		return;
	}

	// 14. Create a variable called `person2` and assign the value of an object with the name "max" and the age 27 to it
	try {
		assert.deepEqual(person2, { name: "max", age: 27 });
		console.log("Test 14 passed!");
	} catch (error) {
		console.log("Test 14 failed :(");
		return;
	}
}

runTests();
