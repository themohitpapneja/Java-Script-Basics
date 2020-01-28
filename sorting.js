
//console.log(b);
nums=[1,2,3,4,5,6,7,8,9,10];
nums.sort(); // this mehtods sorts array taking it as strings

nums.sort(function(a,b) { return b-a});// this sorts as numbers
console.log(nums)
var x=nums[nums.length-1]
for(let i=nums.length-2;i>=1;i--){
    if(nums[i]<x){
        console.log( nums[i]);
        break;
    }
    else{
        console.log(x);
    }
}