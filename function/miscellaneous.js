// function as argument 

function callTwoTimes(f){
    f();
    f();
}
function laugh(){
    console.log("Muhahhaahahah I'm so happy");
}
callTwoTimes(laugh);


//another example
function rage(){
    console.log("I hate everyone");
}
function repeatNTimes(action,num){
     for (let i = 0; i <num; i++) {
         action();
     }
}
repeatNTimes(rage,3);

// another example 

function pickOne(func1, func2){
    let randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber<0.5){
        func1();
    }else{
        func2();
    }
}
pickOne(laugh,rage);


// function as return values 

function multiplyBy(num){
    return function(x){
        return x * num;
    }
}
let triple = multiplyBy(3);
console.log(triple(10));

let double = multiplyBy(2);
console.log(double(10));

let halve = multiplyBy(0.5);
console.log(halve(10));

// another example of function as return values

function makeBetweenFunc(x,y){
    return function(numb){
        if(numb >= x && y <= y ){
            return true;
        }
        return false;
    }
}
let isChild = makeBetweenFunc(10,20);
console.log(isChild(11));


//callback function 

setTimeout(function(){
    console.log("Hi there!");
},3000)























