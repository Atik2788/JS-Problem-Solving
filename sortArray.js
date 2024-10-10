// in ascending
function sortArray(arr){
    return arr.sort((a,b) => a-b)
}
console.log(sortArray([5,9,6,5,6,7,25,69,87,45,5,19]));

// in descending
function sortArrayDes(arr){
    return arr.sort((a,b) => b-a)
}
console.log(sortArrayDes([5,9,6,5,6,7,25,69,87,45,5,19]));