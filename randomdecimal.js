
/*this will give a randon number x

where x>=0 && x<1 */
function randomfraction(){

    return Math.random();
}

console.log(randomfraction());
console.log(Math.random());


/*For Random Whole number */
// Math.floor() rounds off to nearest
// whole number


//below x is a whole number
// x>=0 && , x<20
var x= Math.floor(Math.random() * 20);

console.log(x);



//RANDOM WITHIN A RANGE

var max,min;
max=20;
min=10;

console.log(Math.floor(Math.random() * (max-min+1))+min);

