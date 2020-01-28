const realNunberArray=[4,-5.6,9.8,3.14,42,6,8.34,-2]

// usage of map and filter functions
const squareList=(arr)=>{
    const squaredIntegers = arr.filter( (num) => Number.isInteger(num) && num>0).map(x => x*x);
    return squaredIntegers;   
}


const squaredIntegers=squareList(realNunberArray);


console.log(squaredIntegers);