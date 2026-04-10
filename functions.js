// // 1. FizzBuzz
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(10);

// const fizzBuzzArrow = (n) => {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// };

// fizzBuzzArrow(15);


// // 2. vowelCount
// function vowelCount(input) {
//     let vowels = ["A", "E", "I", "O", "U"];
//     let count = 0;
//     for (const letter of input) {
//         if (vowels.includes(letter.toUpperCase())) {
//             count++;
//         }
//     }
//     console.log(count)
// }

// vowelCount("Sushant");

// const vowelCountArrow = (input) => {
//     let vowels = ["A", "E", "I", "O", "U"];
//     let count = 0;
//     for (const letter of input) {
//         if (vowels.includes(letter.toUpperCase())) {
//             count++;
//         }
//     }
//     console.log(count)
// }

// vowelCountArrow("JavaScript");


// // 3. squareCalculator
// function squareCalculator(n) {
//     return n**2;
// }

// console.log(squareCalculator(6));

// const squareCalculatorArrow = (n) => {
//     return n**2;
// }

// console.log(squareCalculatorArrow(9));


// // 4. Celsius to Fahrenheit
// function tempCoverter(celsius) {
//     return (celsius * (9/5)) + 32;
// }

// console.log(tempCoverter(0));

// const tempConverter = (celsius) => {
//     return (celsius * (9/5)) + 32;
// }

// console.log(tempConverter(37));


// // 5. Largest of Three Numbers
// function largestOfThree(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(largestOfThree(12, 7, 20));

// const largestOfThreeArrow = (a, b, c) => {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(largestOfThreeArrow(45, 60, 30));


// // 6. Sum of First N Natural Numbers
// function sumNaturalNumbers(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumNaturalNumbers(5));

// const sumNaturalNumbersArrow = (n) => {
//     let sum = (n*(n+1))/2; 
//     return sum;
// }

// console.log(sumNaturalNumbersArrow(8));


// 7. Count total number of characters in a string
function countCharacters(input) {
    let count = 0;
    for (const letter of input) {
        count++;
    }
    return count;
}

console.log(countCharacters("Hello"));

const countCharactersArrow = (input) => {
    let count = 0;
    for (const letter of input) {
        count++;
    }
    return count;
}

console.log(countCharactersArrow("JavaScript"));