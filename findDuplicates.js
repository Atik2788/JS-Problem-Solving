function findDuplicates (arr) {
    const seen = new Set();
    const duplicates = new Set()
    
    for(num of arr){
        if (seen.has(num)){
            duplicates.add(num)
        }
        else{
            seen.add(num)
        }
    }

    return [...duplicates]
}

console.log(findDuplicates([1,1,2,3,4,5,4,6,7,5]))