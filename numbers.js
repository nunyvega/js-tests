var assert = require("assert");

function runTests() {
	// 1. Create a variable called `number` and assign the value 10 to it
	try {
		assert.equal(number, 10);
	} catch (error) {
		console.log("Test 1 failed :(");
		return;
	}
	console.log("Test 1 passed!");

	// 2. Create a variable called `add` and assign the value of adding 5 + 5 to it
	try {
		assert.equal(add, 10);
	} catch (error) {
		console.log("Test 2 failed :(");
		return;
	}
	console.log("Test 2 passed!");

	// 3. Create a variable called `subtract` and assign the value of subtracting 5 - 5 to it
	try {
		assert.equal(subtract, 0);
	} catch (error) {
		console.log("Test 3 failed :(");
		return;
	}
	console.log("Test 3 passed!");

	// 4. Create a variable called `multiply` and assign the value of multiplying 5 * 5 to it
	try {
		assert.equal(multiply, 25);
	} catch (error) {
		console.log("Test 4 failed :(");
		return;
	}
	console.log("Test 4 passed!");

	// 5. Create a variable called `divide` and assign the value of dividing 5 / 5 to it
	try {
		assert.equal(divide, 1);
	} catch (error) {
		console.log("Test 5 failed :(");
		return;
	}
	console.log("Test 5 passed!");

	// 6. Create a variable called `modulus` and assign the value of 5 % 5 to it
	try {
		assert.equal(modulus, 0);
	} catch (error) {
		console.log("Test 6 failed :(");
		return;
	}
	console.log("Test 6 passed!");

	// 7. Create a variable called `increment` and assign the value of `number` plus 1 (use the number variable from above and ++ operator)
	try {
		assert.equal(increment, 11);
	} catch (error) {
		console.log("Test 7 failed :(");
		return;
	}
	console.log("Test 7 passed!");

	// 8. Create a variable called `decrement` and assign the value of `number` minus 1 (use the number variable from above and -- operator)
	try {
		assert.equal(decrement, 9);
	} catch (error) {
		console.log("Test 8 failed :(");
		return;
	}
	console.log("Test 8 passed!");

	// 9. Create a variable called `float` and assign the value of `number` divided by 3
	try {
		assert.equal(float, 3.3333333333333335);
	} catch (error) {
		console.log("Test 9 failed :(");
		return;
	}
	console.log("Test 9 passed!");

	// 10. Create a variable called `rounded` and assign the value of `float` rounded to the nearest whole number
	try {
		assert.equal(rounded, 3);
	} catch (error) {
		console.log("Test 10 failed :(");
		return;
	}
	console.log("Test 10 passed!");

	// 11. Create a variable called `power` and assign the value of 5 to the power of 5
	try {
		assert.equal(power, 3125);
	} catch (error) {
		console.log("Test 11 failed :(");
		return;
	}
	console.log("Test 11 passed!");

	// 12. Create a variable called `string` and assign the value of "10" to it
	try {
		assert.equal(string, 10);
	} catch (error) {
		console.log("Test 12 failed :(");
		return;
	}
	console.log("Test 12 passed!");

	// 13. Create a variable called `convert` and assign the value of `string` converted to a number
	try {
		assert.equal(convert, 10);
	} catch (error) {
		console.log("Test 13 failed :(");
		return;
	}
	console.log("Test 13 passed!");

	// 14. Create a variable called `concatenate` and assign the value of `string` + `number`
	try {
		assert.equal(concatenate, 1010);
	} catch (error) {
		console.log("Test 14 failed :(");
		return;
	}
	console.log("Test 14 passed!");

	// 15. Delete the value of `concatenate`
	try {
		assert.equal(concatenate, undefined);
	} catch (error) {
		console.log("Test 15 failed :(");
		return;
	}
	console.log("Test 15 passed!");

	console.log("All tests passed!");
	console.log("   \\o/");
	console.log("    |");
	console.log("   / \\");
}

runTests();
