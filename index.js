const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function 1: Calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}
rl.question("Enter two numbers separated by space for calculateDifference: ", input => {
    const [a, b] = input.split(" ").map(Number);
    console.log("Difference:", calculateDifference(a, b));

    // Function 2: Check if a number is odd
    rl.question("Enter a number to check if it's odd: ", numInput => {
        const number = Number(numInput);
        console.log("Is Odd:", isOdd(number));

        // Function 3: Find the smallest number in an array
        rl.question("Enter an array of numbers separated by space for findMin: ", arrInput => {
            const numbers = arrInput.split(" ").map(Number);
            console.log("Minimum:", findMin(numbers));

            // Function 4: Filter even numbers from an array
            rl.question("Enter an array of numbers separated by space for filterEvenNumbers: ", evenInput => {
                const evenNumbers = evenInput.split(" ").map(Number);
                console.log("Even Numbers:", filterEvenNumbers(evenNumbers));

                // Function 5: Sort an array in descending order
                rl.question("Enter an array of numbers separated by space for sortArrayDescending: ", sortInput => {
                    const sortNumbers = sortInput.split(" ").map(Number);
                    console.log("Sorted Descending:", sortArrayDescending(sortNumbers));

                    // Function 6: Lowercase the first letter of a string
                    rl.question("Enter a string to lowercase its first letter: ", strInput => {
                        console.log("Lowercase First Letter:", lowercaseFirstLetter(strInput));

                        // Function 7: Calculate the average of an array
                        rl.question("Enter an array of numbers separated by space for findAverage: ", avgInput => {
                            const avgNumbers = avgInput.split(" ").map(Number);
                            console.log("Average:", findAverage(avgNumbers));

                            // Function 8: Check if a year is a leap year
                            rl.question("Enter a year to check if it's a leap year: ", yearInput => {
                                const year = Number(yearInput);
                                console.log("Is Leap Year:", isLeapYear(year));
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
});

function isOdd(number) {
    return number % 2 !== 0;
}

function findMin(numbers) {
    return Math.min(...numbers);
}

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

function lowercaseFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
