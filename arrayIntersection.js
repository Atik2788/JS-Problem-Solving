function arrayIntersection(arr1, arr2){
    return arr1.filter(item => arr2.includes(item))
}

console.log(arrayIntersection([1,2,3,4,5,6], [1,3,5,7,9,11]))