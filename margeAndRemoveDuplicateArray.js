function margeAndRemoveDuplicateArray(arr1, arr2){
    const newArray = [...arr1, ...arr2]
    return [...new Set(newArray)]
}

console.log(margeAndRemoveDuplicateArray([1,2,4,4,5,3,6],[6,9,8,7,8,10,10,11,12]));