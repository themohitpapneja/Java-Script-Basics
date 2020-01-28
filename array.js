var myarray=["john",23];

console.log(myarray);

var array=["Quincy",1];

//nested array

var arr=[["The UNiverse",42],["hello",57]];

var mydata= myarray[0];

console.log(mydata);

myarray[0]="hello";
console.log(myarray[0]);

var data=arr[0][1];
console.log(data);


//appending data at the en d of an array
//using push function
array.push("mohit","papneja");

console.log(array);

//pop function to remove last element


array.pop();
console.log(array);


//shift function to remove first element

array.shift();
console.log(array);

//unshift function to add to starting of array

array.unshift("India","papneja");
console.log(array );