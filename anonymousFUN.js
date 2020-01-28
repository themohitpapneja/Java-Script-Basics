var magic = function() {
    return new Date();
}

//arrow function

var magic2 = () =>{
    return new Date();
}

// if we have only return statement
// then we can even remove curly braces
//and the return keyword

var magic3 = () => new Date();

console.log(magic);
console.log(magic2);
console.log(magic3);