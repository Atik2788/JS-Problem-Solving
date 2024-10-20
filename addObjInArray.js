// If you want to add a new object at the end of the array:
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];
const newUser = {id: 3, name: "David"}

users.push(newUser)
console.log(users);