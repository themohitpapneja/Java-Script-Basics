var myConcat = function(arr1,arr2){
    return arr1.concat(arr2);
}


console.log(myConcat([1,2],[3,4]));

// transforming it to an arrow
//function

var c= (a1,a2) => a1.concat(a2);

console.log(c([1,2],[3,4]));
