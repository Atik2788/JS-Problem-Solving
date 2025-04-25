// class Stack{
//     constructor(){
//         this.items = []
//     }

// push(value) {
//     this.items.push(value); // Add value to the stack
//   }

// pop(){
//     return this.items.pop() // Remove top value from the stack
// }

// peek(){
//     return this.items[this.items.length - 1] // Look at the top element of the stack
// }

// isEmpty(){
//     return this.items.length === 0; // Check if stack is empty
// }

// }

// const stack1 = new Stack();

// stack1.push(10)
// stack1.push(20)
// stack1.push(30)

// console.log(stack1.peek());

// stack1.pop()
// console.log(stack1.peek());

// const stack2 = new Stack();
// stack2.push(100)
// // console.log(stack2.peek());
// // console.log(stack2.isEmpty());


// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length - 1]
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }
// }

// function reverseStringUsingStack (str){
//     const stack = new Stack();

//     for(let char of str){
//         stack.push(char)
//     }

//     let reversed = "";

//     while(!stack.isEmpty()){
//         reversed += stack.pop()
//     }

//     return reversed
// }

// console.log(reverseStringUsingStack('hello'));
// console.log(reverseStringUsingStack('bangladesh'));
// console.log(reverseStringUsingStack('Atikur'));



class Stack{
    constructor(){
        this.items = []
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items(this.items.length - 1)
    }

    isEmpty(){
        return this.items.length ===0;
    }
}

function isPalindromeUsingStack(str){

    const formatted = str.replace(/\s+/g, '').toLowerCase()

    const stack = new Stack()

    for(let char of formatted){
        stack.push(char)
    }

    let reversed = "";

    while(!stack.isEmpty()){
       reversed += stack.pop()
    }

    return formatted === reversed;
}

console.log(isPalindromeUsingStack('hello'));
console.log(isPalindromeUsingStack('wow'));
console.log(isPalindromeUsingStack('bangladesh'));