const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) =>{
    return acc+cur
},0)
console.log(sum);

// same with forEach
/* const sumArray = function(arr){
    let sum = 0;
    arr.forEach(num => {
        sum = sum+num
    });
    return sum;
}
console.log(sumArray(numbers)); */

