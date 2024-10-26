// You can use the filter() method to retrieve all elements that meet a certain condition.
function getElementsByCondition (arr, condition){
    return arr.filter(condition)
}

const ages = [15, 18, 21, 16, 30];
const adults = getElementsByCondition(ages, age => age >= 18)
console.log(adults)