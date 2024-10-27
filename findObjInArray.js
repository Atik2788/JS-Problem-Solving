function findObjectInArray(arr, key, value) {
    return arr.find(obj => obj[key] === value);
}

// Example usage:
const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

const result = findObjectInArray(people, "name", "Bob");
console.log(result); // { id: 2, name: "Bob", age: 30 }
