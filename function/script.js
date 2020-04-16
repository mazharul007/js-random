//function in action 

//function declaration
function knockKnock(){
    return "Who's there?";
}
console.log(knockKnock());

// function expression
let greetings = function(){
    return "Hey, Good morning!";
} 
console.log(greetings());


// IIFE
let wiseQuote= (function(writer){
    return "If you are sure to success you'll find a way to win - " + writer;
}('Anonymous'));
console.log(wiseQuote);

