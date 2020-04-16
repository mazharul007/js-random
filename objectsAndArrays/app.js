// fun project with the knowledge of object and array 
// random insult quote  generator :P 


let randomBodyParts = ['Face','Nose','Hair','Chin'];
let randomAdjectives=['smelly','boring','stupid','lazy'];
let randomWords = ['Fly','Marmot','Stick','Dog','Rat'];


// choose a random item from above declared array 
let randomBodyPart = randomBodyParts[Math.floor(Math.random()*4)];
let randomAdjective = randomAdjectives[Math.floor(Math.random()*4)];
let randomWord = randomWords[Math.floor(Math.random()*4)];


console.log(`your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`);





