// Remove a property from an object
function removeProperty(obj, prop){
    delete obj[prop]
}

const person = {name: "John", age: 20}
removeProperty(person, "age");
console.log(person);