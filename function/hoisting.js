// hoisting 

// variable declare with var keyword is hoisted and with let in not hoisted
console.log(animal);
var animal;


console.log(bird);
let bird = "hummingbird";


// function declaration is hoisted other side function expression is not hoisted other

greet();
function greet(){
    console.log("Hi there");
}


greet2();
var greet2= function(){
    console.log("Hi there");
}