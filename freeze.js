function freezeobj(){
    const math_constants={
        PI:3.14
    };
    //this line below restricts
    //PI from changing

    Object.freeze(math_constants);
    try{
        math_constants.PI=99;
    }catch(ex){
        console.log(ex);
    }

    return math_constants.PI;
}
  
const PI = freezeobj();
console.log(PI);