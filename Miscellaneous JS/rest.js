function sum (){
    const argsArr = [...arguments];
    return argsArr.reduce((total,curVal)=>{
        return total + curVal;
    })
}
console.log(sum(1,23,2,64,10));


// new nicer syntax ...
function multiply(...args){
    return args.reduce((total,curVal)=>{
        return total*curVal; 
    })
}

console.log(multiply(10,10));
 

function person(fName, lName, ...args){
    return  `Full Name: ${fName} ${lName} , ${args}`;
}
console.log(person('Mazharul Hoque', 'Naumy', 'Software Engineer'));


