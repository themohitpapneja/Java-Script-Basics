function nextInLine(arr,item){

    arr.push(item);
    return arr.shift();
}

var testArr=[1,2,3,4,5];

console.log(testArr);
//stringify changes this array to string
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));