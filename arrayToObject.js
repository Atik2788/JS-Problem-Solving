function arrayToObject(arr) {
    return arr.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});
}

// Example usage:
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

console.log(arrayToObject(users));
// Output: 
// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" },
//   3: { id: 3, name: "Charlie" }
// }
