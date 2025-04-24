function reverseArray (arr) {
    return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5]))


const arr2 =[1, 2, 3, 4, 5, 7, 9, 11, 13]
function reverseArrayManual(arr){
    let result = []

    for(let i = arr.length -1; i >=0; i--){
        result.push(arr[i])
    }
    return result
}

console.log(reverseArrayManual(arr2))