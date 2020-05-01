// passing default param value in function 

let multiply = (x,y=2)=>{
    return x*y
};
console.log(multiply(10));


const greet = (person, greetMsg = 'Hello')=>{
    console.log(`${greetMsg} ${person}, Whats up!`);
}
greet('Naumy');
