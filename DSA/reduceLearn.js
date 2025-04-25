const numbers = [15, 9, 2, 9, 15];

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

// console.log(findSecondMax); 


const numbers2 = [5, 5, 
];
const findThirdLargest = numbers2.reduce((acc, curr) =>{
    if(curr > acc.max){
        acc.thirdMax = acc.max;
        acc.secondMax = acc.max;
        acc.max = curr;
    }
    else if(curr > acc.secondMax && curr !== acc.max){
        acc.thirdMax = acc.secondMax;
        acc.secondMax = curr;
    } 
    else if(curr > acc.thirdMax && curr !== acc.max && curr !== acc.secondMax){
        // acc.thirdMax = acc.secondMax;
        acc.thirdMax = curr;
    } 
    return acc;

}, {max: -Infinity, secondMax: -Infinity, thirdMax: -Infinity})
// console.log("third largest", findThirdLargest.thirdMax); 


//  Find the largest even number and the smallest odd number in an array
const numbers3 = [5, 12, 7, 4, 9, 16, 3, 3, 16, 2, 17];

const findLargestAndSmallestOddNumber = numbers3.reduce((acc, curr) =>{

    if(curr % 2 === 0){
        if(curr > acc.maxEven){
            acc.maxEven = curr
        }
    }
    else{
        if (curr < acc.smallestOdd){
            acc.smallestOdd = curr
        }
    }
    return acc;
    
}, {maxEven: -Infinity, smallestOdd: Infinity})

console.log(findLargestAndSmallestOddNumber); 

