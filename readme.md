# JavaScript Learning Tests

This repository is designed to help you learn JavaScript by doing. It contains a series of JavaScript files, each focusing on a different aspect of the language.

## How It Works

Each `.js` file in this repository contains a series of tests that are initially set to fail. Your task is to write the necessary JavaScript code to make these tests pass. This hands-on approach allows you to practice and reinforce your JavaScript knowledge.

## Getting Started

To get started, you'll need to have [Node.js](https://nodejs.org/) installed on your computer. If you don't have Node.js installed, please visit the [official Node.js website](https://nodejs.org/) to download and install it.

Once you have Node.js installed, clone this repository to your local machine using the following command:

```bash
git clone git@github.com:nunyvega/js-tests.git
```

After cloning the repository, navigate to the `js-tests` directory:

```bash
cd js-tests
```

Before running the tests, you'll need to install the necessary Node.js dependencies (such as `nodemon`) by running:

```bash
npm install
```

## Running the Tests

You can run any test file by using Node.js. For example, to run the numbers test, you would use the following command:

```bash
node numbers.js
```

To continuously watch a test file for changes and re-run the tests automatically, use the `npm run watch:...` command. For example, to watch the arrays test file, use:

```bash
npm run watch:arrays
```

Here are the commands for watching each test file:

- `npm run watch:arrays` - Watches the `arrays.js` file.
- `npm run watch:booleans` - Watches the `booleans.js` file.
- `npm run watch:numbers` - Watches the `numbers.js` file.
- `npm run watch:objects` - Watches the `objects.js` file.
- `npm run watch:strings` - Watches the `strings.js` file.

Replace `watch:arrays` with the appropriate command for the file you want to watch.

## Your Task

Your goal is to modify each test file so that all the tests pass. You will need to declare and initialize variables, modify objects, and perform operations that satisfy the conditions of each test.

Here's what you need to do for each file:

- `arrays.js`: Work with JavaScript arrays and understand their methods and properties.
- `booleans.js`: Learn how boolean values work in JavaScript and how to use logical operators.
- `numbers.js`: Practice with numbers, arithmetic operations, and number methods.
- `objects.js`: Understand how to create and manipulate JavaScript objects.
- `strings.js`: Explore string manipulation and common string methods.

## Tips

- Use the `npm run watch:...` commands to automatically re-run tests when you save changes to a file.
- If a test fails, the console will log which test failed and stop running further tests. Fix the failing test before proceeding to the next one.
- Once all tests pass, you will see a series of "Test passed!" messages in the console.

## Contributing

Feel free to fork this repository and contribute by adding more tests or improving the existing ones. If you have any suggestions or find any issues, please open an issue or submit a pull request.

Happy coding and learning!
