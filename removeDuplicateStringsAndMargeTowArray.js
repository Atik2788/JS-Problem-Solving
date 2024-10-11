function margeAndRemoveDupString(arr1, arr2){
    const newArray = [...arr1, ...arr2]
    return [...new Set(newArray)]
}

console.log(margeAndRemoveDupString(["apple", "mango", "banana", "apple", "orange", "banana", "mango"], ["apple", "mango", "banana", "apple", "lemon", "carrot"]));