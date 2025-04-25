function isPalindrome (str){
    const formatedStr = str.replace(/\s+/g, '').toLowerCase();
    const reverseStr = formatedStr.split('').reverse().join('')

    return formatedStr === reverseStr
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true