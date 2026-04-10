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