//making oobjects in javascript


//format
// "properties" : "values"
var ourdog={
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everyone!"],
    "age in years" : 5
};


var dog2={
    "name" : "Quincy",
    "legs" : 3,
    "tails" : 2,
    "friends": ["john","lakshay","india"],
    "age in years" : 5
};
// accessing objects using dot notation
var name=ourdog.name;

console.log(name);

var friends=ourdog.friends;
console.log(friends);

//accessing using bracket notation
//FOR VALUES WITH SPACE BETWEEN THEM
//IMPORTANT

var x=ourdog["age in years"];
var u=ourdog["legs"];
console.log(x);
console.log(u);

console.log(ourdog['age in years']);