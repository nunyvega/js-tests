var assert = require('assert');

function runTests() {
    // 1. Create a variable called `array` and assign the value of an empty array to it
    try {
        assert.deepEqual(array, []);
        console.log("Test 1 passed!");
    } catch (error) {
        console.log("Test 1 failed :(");
        return;
    }

    // 2. Create a variable called `length` and assign the value of the length of `array` to it
    try {
        assert.equal(length, 0);
        console.log("Test 2 passed!");
    } catch (error) {
        console.log("Test 2 failed :(");
        return;
    }

    // 3. Create a variable called `firstItem` and assign the value of the first item of `array` to it
    try {
        assert.equal(firstItem, undefined);
        console.log("Test 3 passed!");
    } catch (error) {
        console.log("Test 3 failed :(");
        return;
    }

    // 4. Create a variable called `lastItem` and assign the value of the last item of `array` to it
    try {
        assert.equal(lastItem, undefined);
        console.log("Test 4 passed!");
    } catch (error) {
        console.log("Test 4 failed :(");
        return;
    }

    // 5. Create a variable called `middleItem` and assign the value of the middle item of `array` to it
    try {
        assert.equal(middleItem, undefined);
        console.log("Test 5 passed!");
    } catch (error) {
        console.log("Test 5 failed :(");
        return;
    }

    // 6. Create a variable called `array2` and assign the value of an array with 1 item in it to it
    try {
        assert.deepEqual(array2, [1]);
        console.log("Test 6 passed!");
    } catch (error) {
        console.log("Test 6 failed :(");
        return;
    }

    // 7. Create a variable called `length2` and assign the value of the length of `array2` to it
    try {
        assert.equal(length2, 1);
        console.log("Test 7 passed!");
    } catch (error) {
        console.log("Test 7 failed :(");
        return;
    }

    // 8. Create a variable called `firstItem2` and assign the value of the first item of `array2` to it
    try {
        assert.equal(firstItem2, 1);
        console.log("Test 8 passed!");
    } catch (error) {
        console.log("Test 8 failed :(");
        return;
    }

    // 9. Create a variable called `lastItem2` and assign the value of the last item of `array2` to it
    try {
        assert.equal(lastItem2, 1);
        console.log("Test 9 passed!");
    } catch (error) {
        console.log("Test 9 failed :(");
        return;
    }

    // 10. Create a variable called `middleItem2` and assign the value of the middle item of `array2` to it
    try {
        assert.equal(middleItem2, 1);
        console.log("Test 10 passed!");
    } catch (error) {
        console.log("Test 10 failed :(");
        return;
    }

    // 11. Create a variable called `array3` and assign the value of an array with 2 items in it to it
    try {
        assert.deepEqual(array3, [1, 2]);
        console.log("Test 11 passed!");
    } catch (error) {
        console.log("Test 11 failed :(");
        return;
    }

    // 12. Create a variable called `length3` and assign the value of the length of `array3` to it
    try {
        assert.equal(length3, 2);
        console.log("Test 12 passed!");
    } catch (error) {
        console.log("Test 12 failed :(");
        return;
    }

    // 13. Push the value 3 into `array3`
    try {
        assert.deepEqual(array3, [1, 2, 3]);
        console.log("Test 13 passed!");
    } catch (error) {
        console.log("Test 13 failed :(");
        return;
    }

    // 14. Pop the value out of `array3`
    try {
        assert.deepEqual(array3, [1, 2]);
        console.log("Test 14 passed!");
    } catch (error) {
        console.log("Test 14 failed :(");
        return;
    }

    // 15. Delete the first item in `array3`
    try {
        assert.deepEqual(array3, [2]);
        console.log("Test 15 passed!");
    } catch (error) {
        console.log("Test 15 failed :(");
        return;
    }
}

runTests();
