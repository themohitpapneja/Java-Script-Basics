var testobj={
    12 : "namath",
    16 : "Monatana",
    18 : "lakshay"
};

var num=16;
var obj=testobj[num];
console.log(obj);

//objects can be updated using dotnotation

testobj[12] = "lakshay";

//adding properties

testobj.name="mohit";

console.log(testobj.name);

//deleting properties

delete testobj.name;