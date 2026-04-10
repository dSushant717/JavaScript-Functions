// 1. FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

const fizzBuzzArrow = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

// 2. vowelCount
function vowelCount(input) {
    let vowels = ["A", "E", "I", "O", "U"];
    let count = 0;
    for (const letter of input) {
        if (vowels.includes(letter.toUpperCase())) {
            count++;
        }
    }
    console.log(count)
}

const vowelCountArrow = (input) => {
    let vowels = ["A", "E", "I", "O", "U"];
    let count = 0;
    for (const letter of input) {
        if (vowels.includes(letter.toUpperCase())) {
            count++;
        }
    }
    console.log(count)
}

// 3. squareCalculator
function squareCalculator(n) {
    return n**2;
}

const squareCalculatorArrow = (n) => {
    return n**2;
}

// 4. Celsius to Fahrenheit
function tempCoverter(celsius) {
    return (celsius * (9/5)) + 32;
}

const tempConverter = (celsius) => {
    return (celsius * (9/5)) + 32;
}

// 5. Largest of Three Numbers
function largestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

const largestOfThreeArrow = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// 6. Sum of First N Natural Numbers
function sumNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const sumNaturalNumbersArrow = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 7. Count total number of characters in a string
function countCharacters(input) {
    let count = 0;
    for (const letter of input) {
        count++;
    }
    return count;
}

const countCharactersArrow = (input) => {
    let count = 0;
    for (const letter of input) {
        count++;
    }
    return count;
}