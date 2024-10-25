// Find Largest
function findLargestReduse(numbers){
    const max = numbers.reduce((num, acc) => (num > acc ? num : acc), numbers[0])
    return max;
}

console.log("find largest:", findLargestReduse([12, 2, 58, 66, 99, 88, 99, 115, 225]));

// Sum of numbers in Array
function sumOfNumbers (arr){
    const sum = arr.reduce((total, num) => total + num, 0)
    return sum
}
console.log("sum of Numbers:", sumOfNumbers([12, 2, 58, 66, 99, 88, 99, 115, 225, 1]));

// Multiplies of numbers in Array
const numbers = [12, 2, 58, 66, 1]
const multiplies = numbers.reduce((acc, cur) => acc * cur, 1)
console.log("multiplies:", multiplies);