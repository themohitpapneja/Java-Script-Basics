const arr1=["Jan","Feb","March"];

let arr2;

(function()
{
    arr2=arr1;
    arr1[0]="Potatao";

})();

console.log(arr2);
// prints [ 'Potatao', 'Feb', 'March' ]

// ... is also spread operator
//but if we do arr2=[...arr1];
// then arr2 prints  ["Jan","Feb","March"];
