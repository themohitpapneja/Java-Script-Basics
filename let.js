//unlike var , let doesnot allow 
//declaration of any variable twice

let a = 5;
//let a;
//var a;

//differences in scope

var b=5;

{
    let a=7;
    b=7;
    console.log(a+","+b);
}

console.log(a+","+b);

