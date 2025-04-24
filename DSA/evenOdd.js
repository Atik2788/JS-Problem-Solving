const numbers = [10, 3, 4, 7, 8, 13, 22]

function evenOddnumber (arr){
    let even = [];
    let odd = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 ===0){
            even.push(arr[i])
        }else(
            odd.push(arr[i])
        )
    }

    return {even, odd}
}

console.log(evenOddnumber(numbers));