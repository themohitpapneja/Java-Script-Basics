var ourdog={
    name : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everyone!"]
};


function checkprop(val){

if(ourdog.hasOwnProperty(val)){
return ourdog[val ];
}
else{
return "not found";
}
}

console.log(checkprop("name"));