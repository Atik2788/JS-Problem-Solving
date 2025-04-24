let numbers = [10, 4, 7, 99, 2]

let max = Math.max(...numbers)
let min = Math.min(...numbers)

// console.log('max:', max,', ', "min:", min);


function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0]
    for(let i = 1; i<arr.length; i++ ){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return {max, min}
}

console.log(findMaxMin([10, 4, 7, 99, 2, 101, 1, 202]));