//get rendom number
function getRendomNumber(min, max){
    
}
console.log(getRendomNumber(1,6)); // answer will be: 1,6,2,4



function getRendomNumber(min, max){
    return Math.floor(Math.random() * (max)  + min)
}
console.log(getRendomNumber(1,6));