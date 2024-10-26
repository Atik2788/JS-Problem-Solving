// You can use the filter() method to retrieve all elements that meet a certain condition.
function getElementsByCondition (arr, condition){
    return arr.filter(condition)
}

const ages = [15, 18, 21, 16, 30];
const adults = getElementsByCondition(ages, age => age >= 18)
console.log(adults) // [18, 21, 30]


// You can use the filter() method to get the first element that matches a specific condition.
function getFirstElementByCondition (arr, condition){
    return arr.filter(condition)
}

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

const firstUser = getFirstElementByCondition(users, user => user.age >=25)    

console.log(firstUser)