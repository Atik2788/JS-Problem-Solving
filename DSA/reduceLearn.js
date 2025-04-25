const numbers = [15, 9, 2, 3, 4, 5, 0, 11, -1, 15];

const sum = numbers.reduce((acc, cur) =>{
    return acc+cur
},0)
// console.log(sum);

// same with forEach
/* const sumArray = function(arr){
    let sum = 0;
    arr.forEach(num => {
        sum = sum+num
    });
    return sum;
}
console.log(sumArray(numbers)); */

const evenOddCount = numbers.reduce((acc, curr) =>{
    if(curr % 2 === 0){
        acc.even++
    }
    else{
        acc.odd++
    }
    return acc;
        
}, {even: 0, odd:0})

// console.log(evenOddCount); 


const findMinMax = numbers.reduce((acc, curr) =>{
    if(curr > acc.max ){
        acc.max = curr
    }
     if(curr < acc.min){
        acc.min = curr
    }
    return acc
},{min: Infinity, max: -Infinity})

// console.log(findMinMax); 

const findSecondMax = numbers.reduce((acc, curr) =>{
    if(curr > acc.max){
        acc.secondMax = acc.max;
        acc.max = curr;
    }
    if(curr>acc.secondMax && curr !== acc.max){
        acc.secondMax = curr;
    }
    return acc

}, {max: -Infinity, secondMax: -Infinity})

console.log(findSecondMax); 