// If you want to add a new object at the end of the array:
let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];
let newuser = {id: 3, name: "David"}

users.push(newuser)
console.log(users);