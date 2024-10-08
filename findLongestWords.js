function longestWords(sentence){
    let words = sentence.split(" ")
    let longest = ("")

    for(let word of words){
        if(word.length >= longest.length){
            longest.push = word;
        }
    }
    return longest;
}

console.log(longestWords("The quick brown fox jumps over the lazy dog."));