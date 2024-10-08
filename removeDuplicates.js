function removeDuplicates(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicates([1, 2, 1, 5, 2, 6, 3, 4, 4, 5, 6]))