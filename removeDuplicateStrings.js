function removeDuplicateStrings (arr){
    return [...new Set(arr)]
}

console.log(removeDuplicateStrings(["apple", "mango", "banana", "apple", "orange", "banana", "mango"])); 