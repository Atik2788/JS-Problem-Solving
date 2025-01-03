function findLargest (arr) {
    return Math.max(...arr)
}

console.log(findLargest([12, 2, 58, 66, 99, 88, 99, 115]));


// using >>> Reduce <<<
function findLargestReduse(numbers){
    const max = numbers.reduce((num, acc) => (num > acc ? num : acc), numbers[0])
    return max;
}

console.log(findLargestReduse([12, 2, 58, 66, 99, 88, 99, 115, 225]));

