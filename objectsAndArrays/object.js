// js object

let car ={
    wheels:4,
    color:'red'
}
//adding property through dot notation
car.maxSpeed="300 km/hr";
car.owner= "John Doe";

//adding property through bracket notation
car['model']= "Toyota Corolla";
car['haveInsurance'] = true;

// object is mutable. 
car.owner = "Alex";
car['haveInsurance']= false;

console.log(car);


// object constructor 
// Persons Constructor 
function Persons(name, age, occupation){
    this.name = name;
    this.age  = age;
    this.occupation = occupation
}

//creating instances of an object through the Persons constructor 
let personOne = new Persons("John",26,"Worker");
let personTwo = new Persons("Doe",36,"SE");
let personThree = new Persons("Sire",22,"Student");
let personFour = new Persons("Alex",26,"Driver");
    personFour.gender = "Male";
    
console.log(personOne,personTwo);
console.log(personFour);

