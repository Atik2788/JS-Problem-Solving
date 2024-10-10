function countVowel (str){
    return (str.match(/[aeiou]/gi) || [].length)
}

console.log(countVowel("Hello world, wellcome to new Bangladesh-2.0"));