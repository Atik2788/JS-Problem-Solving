const numbers = [110, 4, 7, 99, 45, 108, 3, 110]

function secondLargest(arr){
    let max = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            secondLargest = max;
            max = arr[i]

        } else if(arr[i] > secondLargest && arr[i] !== max){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}
console.log(secondLargest(numbers));