var assert = require("assert");

function runTests() {
	// 1. Create a variable called `max` and assign the value of your name to it
	try {
		assert.equal(max, "max");
	} catch (error) {
		console.log("Test 1 failed :(");
		return;
	}
	console.log("Test 1 passed!");

	// 2 Create a variable called `lastName` and assign the value of your last name to it
	try {
		assert.equal(lastName, "robles");
	} catch (error) {
		console.log("Test 2 failed :(");
		return;
	}
	console.log("Test 2 passed!");

	// 3. Create a variable called `length` and assign the value of the length of `max` to it
	try {
		assert.equal(length, 3);
	} catch (error) {
		console.log("Test 3 failed :(");
		return;
	}
	console.log("Test 3 passed!");

	// 4. Create a variable called `firstCharacter` and assign the value of the first character of `max` to it
	try {
		assert.equal(firstCharacter, "m");
	} catch (error) {
		console.log("Test 4 failed :(");
		return;
	}
	console.log("Test 4 passed!");

	// 5. Create a variable called `lastCharacter` and assign the value of the last character of `max` to it
	try {
		assert.equal(lastCharacter, "x");
	} catch (error) {
		console.log("Test 5 failed :(");
		return;
	}
	console.log("Test 5 passed!");

	// 6. Create a variable called `middleCharacter` and assign the value of the middle character of `max` to it
	try {
		assert.equal(middleCharacter, "a");
	} catch (error) {
		console.log("Test 6 failed :(");
		return;
	}
	console.log("Test 6 passed!");

	// 7. Create a variable called `firstAndLastCharacter` and assign the value of the first and last character of `max` to it
	try {
		assert.equal(firstAndLastCharacter, "mx");
	} catch (error) {
		console.log("Test 7 failed :(");
		return;
	}
	console.log("Test 7 passed!");

	// 8. Create a variable called `capitalizedMax` and assign the value of `max` to it with the first character capitalized (use the toUpperCase method)
	try {
		assert.equal(capitalizedMax, "Max");
	} catch (error) {
		console.log("Test 8 failed :(");
		return;
	}
	console.log("Test 8 passed!");

	// 9. Create a variable called `maxArray` and assign the value of an array with the values `m`, `a`, and `x` in it to it
	try {
		assert.deepEqual(maxArray, ["m", "a", "x"]);
	} catch (error) {
		console.log("Test 9 failed :(");
		return;
	}
	console.log("Test 9 passed!");

	// 10. Create a variable called `fullName` and assign the value of `max` + `lastName` to it (add a space between the two variables)
	try {
		assert.equal(fullName, "max robles");
	} catch (error) {
		console.log("Test 10 failed :(");
		return;
	}
	console.log("Test 10 passed!");

	// 11. Create a variable called `length` and assign the value of the length of `fullName` to it
	try {
		assert.equal(length, 10);
	} catch (error) {
		console.log("Test 11 failed :(");
		return;
	}
	console.log("Test 11 passed!");

	// 12. Create a variable called `firstCharacter` and assign the value of the first character of `fullName` to it
	try {
		assert.equal(firstCharacter, "m");
	} catch (error) {
		console.log("Test 12 failed :(");
		return;
	}
	console.log("Test 12 passed!");

	// 13. Create a variable called `lastCharacter` and assign the value of the last character of `fullName` to it
	try {
		assert.equal(lastCharacter, "s");
	} catch (error) {
		console.log("Test 13 failed :(");
		return;
	}
	console.log("Test 13 passed!");

	// 14. Create a variable called `middleCharacter` and assign the value of the middle character of `fullName` to it
	try {
		assert.equal(middleCharacter, " ");
	} catch (error) {
		console.log("Test 14 failed :(");
		return;
	}
	console.log("Test 14 passed!");

	// 15. Create a variable called `firstWord` and assign the value of the first word of `fullName` to it (use the substring method)
	try {
		assert.equal(firstWord, "max");
	} catch (error) {
		console.log("Test 15 failed :(");
		return;
	}
	console.log("Test 15 passed!");

	// 16. Create a variable called `secondWord` and assign the value of the second word of `fullName` to it (use the substring method)
	try {
		assert.equal(secondWord, "robles");
	} catch (error) {
		console.log("Test 16 failed :(");
		return;
	}
	console.log("Test 16 passed!");

	// 17. Create a variable called `firstAndSecondWord` and assign the value of the first and second word of `fullName` to it (use the substring method)
	try {
		assert.equal(firstAndSecondWord, "max robles");
	} catch (error) {
		console.log("Test 17 failed :(");
		return;
	}
	console.log("Test 17 passed!");

	// 18. Create a variable called `capitalizedFullName` and assign the value of `fullName` to it with the first character capitalized (use the toUpperCase method)
	try {
		assert.equal(capitalizedFullName, "Max robles");
	} catch (error) {
		console.log("Test 18 failed :(");
		return;
	}
	console.log("Test 18 passed!");

	// 19. Delete the `lastName` variable
	try {
		assert.equal(lastName, undefined);
	} catch (error) {
		console.log("Test 19 failed :(");
		return;
	}
	console.log("Test 19 passed!");
}

runTests();
