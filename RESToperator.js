//rest operator
// ...
const sum=(function(){
    /// ...args converts all entries to an array named args
    return function(...args){
        return args.reduce((a,b)=> a+b,0);

    };
})();

console.log(sum(1,2,3,4));