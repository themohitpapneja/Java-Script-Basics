//read only let type variable is 
// known as const

// "use strict"; is used for
// error-checking

"use strict";
const A=5;

//  A=A+6;
console.log(A);

// we use capital letters for 
// const variables mostly.

 const s=[2,5,7];
//error
// s=[7,5,2];

//not error

s[0]=7;
s[1]=3;
s[2]=2;
console.log(s);