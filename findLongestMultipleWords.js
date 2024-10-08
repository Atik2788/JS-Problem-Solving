function findMultipleLongestWord(sentence){
    let words = sentence.split(" ");
    let longest = [];
    let maxLength = 0;
    
    for(let word of words){
        if(word.length > maxLength){
            longest = [word]
            maxLength = word.length;
            console.log(maxLength);
        }
        else if(word.length === maxLength){
            longest.push(word)
        }
    }
    return longest;
}

console.log(findMultipleLongestWord("The quick brown fox jumps over the lazy dog."));