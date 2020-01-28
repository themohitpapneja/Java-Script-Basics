var s="double qouted \"string\" "

//escape sequence
console.log(s);

//also 

var s1='hello \n"mohit" '

console.log(s1);

//concatenation

var sa= "Hello ";
sa+="World"

//strings are immutable in js
console.log(sa[4]);
sa[0]="j";
console.log(sa);

console.log(sa.length);
console.log(sa[sa.length-1]);

var x="welcome " + sa;

console.log(x);