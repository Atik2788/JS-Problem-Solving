function longestWords (sentence){
    let words = sentence.split(" ")
    let longest = "";

    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }    
    return longest;
}

console.log(longestWords("I love programming chalange! Just kidding."))