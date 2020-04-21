
let add = (num1,num2)=> num1+num2;
let sub = (num1,num2)=> num1-num2;
let mul = (num1,num2)=> num1*num2;
let div = (num1,num2)=> num1/num2;

let operations =[add,sub,mul,div];

console.log(operations[0](30,5));
console.log(operations[1](30,5));
console.log(operations[2](30,5));
console.log(operations[3](30,5));

for(let func of operations){
    let result = func(25,10);
    console.log(result);
}

// creating our custom method
let thing={
    doOperation:mul
}

console.log(thing.doOperation(10,10)); // our very first custom doOperation method

