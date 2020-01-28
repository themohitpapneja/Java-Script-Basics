var s=45   ;

try{
    
    console.log(s.split("").reverse().join(""));
}   
catch(e){
    console.log(e.message);
}
finally{
    console.log(s);
}