function removeFalsyValue(arr){
 return arr.filter(Boolean);
}

console.log(removeFalsyValue([0, 1, 2, '', 3, false, 4]))
