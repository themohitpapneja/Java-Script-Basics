function makeclass(){
    class Thermostat{
        constructor(temp){
            this._temp=5/9 *(temp-32);
        }
        //getter method
        get temperature(){
            return this._temp;
        }
        //setter method
        set temperature(updatedTemp){
            this._temp=updatedTemp;
        }
    }
    return Thermostat;
}
// this make class will return the thermostat object
const Thermostat=makeclass();
// we are instantiating  an object
// 76 goes to constructor
const thermos= new Thermostat(76);
// it will go to getter method
//calling getter and setter methods donot require parenthesis
// the are accessed like properties
let temp= thermos.temperature;
console.log(temp);
thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);