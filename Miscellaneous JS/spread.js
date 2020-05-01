// spread with function call 
const numbers = [1,23,18,100];

console.log(Math.max(...numbers));


const colors = ['yellow', 'orange', 'red', 'blue'];

const getColor= (a,b,c,d)=>{
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}
console.log(getColor(...colors));


// uses of spread operator with array literals 

//concat array with Array Literals 
const animals = ['dog','cow','goat','horse'];
const birds = ['hummingbird','sparrow'];

const animalsAndBirds = [...animals,...birds];
console.log(animalsAndBirds);

//making a copy of animals array 
const copyOfAnimal = [...animals];
console.log(copyOfAnimal)

//splitting the str through spread
let sampleStr = 'Naumy';
console.log(...sampleStr); 


// uses of spread operator with obj literals 
const cow ={
    legs:4,
    isPet:true
}
const tiger = {
    legs : 4,
    isPet : false
}

const hen={
    ...cow
}
console.log(hen);

