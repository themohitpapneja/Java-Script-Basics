/**const createPerson= (name,age,gender)=>{
// this is returning an object
    return{
        name: name,
        age: age,
        gender: gender
    };
}
**/


// another way of doing this

const createPerson=(name,age,gender) =>( { name,age,gender });



console.log(createPerson("mohit",76,"male"));