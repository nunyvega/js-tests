var assert = require('assert');

// Now let's learn about strings

// 17. Create a variable called `max` and assign the value of your name to it

// Assert that the value of `max` is your name
assert.equal(max, 'max');

// 18. Create a variable called `lastName` and assign the value of your last name to it

// Assert that the value of `lastName` is your last name
assert.equal(lastName, 'robles');

// 19. Create a variable called `fullName` and assign the value of `max` + `lastName` to it (add a space between the two variables)

// Assert that the value of `fullName` is your full name
assert.equal(fullName, 'max robles');

// 20. Create a variable called `length` and assign the value of the length of `fullName` to it

// Assert that the value of `length` is the length of your full name
assert.equal(length, 10);

// 21. Create a variable called `firstCharacter` and assign the value of the first character of `fullName` to it

// Assert that the value of `firstCharacter` is the first character of your full name
assert.equal(firstCharacter, 'm');

// 22. Create a variable called `lastCharacter` and assign the value of the last character of `fullName` to it

// Assert that the value of `lastCharacter` is the last character of your full name
assert.equal(lastCharacter, 's');

// 23. Create a variable called `middleCharacter` and assign the value of the middle character of `fullName` to it

// Assert that the value of `middleCharacter` is the middle character of your full name
assert.equal(middleCharacter, ' ');

// 24. Create a variable called `firstWord` and assign the value of the first word of `fullName` to it (use the substring method)

// Assert that the value of `firstWord` is your first name
assert.equal(firstWord, 'max');

// 25. Create a variable called `secondWord` and assign the value of the second word of `fullName` to it (use the substring method)

// Assert that the value of `secondWord` is your last name
assert.equal(secondWord, 'robles');

// 26. Create a variable called `firstAndSecondWord` and assign the value of the first and second word of `fullName` to it (use the substring method)

// Assert that the value of `firstAndSecondWord` is your first and last name
assert.equal(firstAndSecondWord, 'max robles');

// 27. Create a variable called `capitalizedFullName` and assign the value of `fullName` to it with the first character capitalized (use the toUpperCase method)

// Assert that the value of `capitalizedFullName` is your full name with the first character capitalized
assert.equal(capitalizedFullName, 'Max robles');

// 28. Delete the `lastName` variable

// Assert that the value of `lastName` is undefined
assert.equal(lastName, undefined);
