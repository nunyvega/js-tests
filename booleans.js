var assert = require("assert");

function runTests() {
	// 1. Create a variable called `boolean` and assign the value true to it
	try {
		assert.equal(boolean, true);
		console.log("Test 1 passed!");
	} catch (error) {
		console.log("Test 1 failed :(");
		return;
	}

	// 2. Create a variable called `not` and assign the value of the opposite of `boolean` to it
	try {
		assert.equal(not, false);
		console.log("Test 2 passed!");
	} catch (error) {
		console.log("Test 2 failed :(");
		return;
	}

	// 3. Create a variable called `and` and assign the value of `boolean` AND `not` to it
	try {
		assert.equal(and, false);
		console.log("Test 3 passed!");
	} catch (error) {
		console.log("Test 3 failed :(");
		return;
	}

	// 4. Create a variable called `or` and assign the value of `boolean` OR `not` to it
	try {
		assert.equal(or, true);
		console.log("Test 4 passed!");
	} catch (error) {
		console.log("Test 4 failed :(");
		return;
	}

	// 5. Create a variable called `trueOrFalse` and assign the value of `boolean` OR `not` AND `and` to it
	try {
		assert.equal(trueOrFalse, false);
		console.log("Test 5 passed!");
	} catch (error) {
		console.log("Test 5 failed :(");
		return;
	}

	// 6. Create a variable called `trueOrTrue` and assign the value of `boolean` OR `not` OR `and` to it
	try {
		assert.equal(trueOrTrue, true);
		console.log("Test 6 passed!");
	} catch (error) {
		console.log("Test 6 failed :(");
		return;
	}

	// 7. Create a variable called `falseOrTrue` and assign the value of `not` OR `and` OR `or` to it
	try {
		assert.equal(falseOrTrue, true);
		console.log("Test 7 passed!");
	} catch (error) {
		console.log("Test 7 failed :(");
		return;
	}

	// 8. Create a variable called `falseOrFalse` and assign the value of `not` OR `and` OR `or` to it
	try {
		assert.equal(falseOrFalse, false);
		console.log("Test 8 passed!");
	} catch (error) {
		console.log("Test 8 failed :(");
		return;
	}

	// 9. Create a variable called `trueAndFalse` and assign the value of `boolean` AND `not` AND `and` to it
	try {
		assert.equal(trueAndFalse, false);
		console.log("Test 9 passed!");
	} catch (error) {
		console.log("Test 9 failed :(");
		return;
	}

	// 10. Create a variable called `trueAndTrue` and assign the value of `boolean` AND `not` AND `and` to it
	try {
		assert.equal(trueAndTrue, true);
		console.log("Test 10 passed!");
	} catch (error) {
		console.log("Test 10 failed :(");
		return;
	}

	// 11. Create a variable called `falseAndTrue` and assign the value of `not` AND `and` AND `or` to it
	try {
		assert.equal(falseAndTrue, false);
		console.log("Test 11 passed!");
	} catch (error) {
		console.log("Test 11 failed :(");
		return;
	}

	// 12. Create a variable called `falseAndFalse` and assign the value of `not` AND `and` AND `or` to it
	try {
		assert.equal(falseAndFalse, false);
		console.log("Test 12 passed!");
	} catch (error) {
		console.log("Test 12 failed :(");
		return;
	}

	console.log("All tests passed!");
	console.log("   \\o/");
	console.log("    |");
	console.log("   / \\");
}

runTests();
