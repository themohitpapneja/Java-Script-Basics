var vowel={
    x:2.54,
    y:54.2,
    z:4.2
};

var x=vowel.x;
var y=vowel.y;
var z=vowel.z;
    //by destructuring

const{ x:a ,y:b,z:c}=vowel;

console.log(a,b,c);
console.log(x,y,z);

const val={
    today:{
        min:4,max:8
    },
    tomorrow:{
        min:5,max:9
    }
};

function getmaxtmrw(forecast){
    const {tomorrow:{max: answer} }=forecast;

    return answer;
}

console.log(getmaxtmrw(val));