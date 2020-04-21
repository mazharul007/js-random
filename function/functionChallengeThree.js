// function to check ispangram or not 

function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    for(let char of alphabets){
        if(!lowerCased.includes( char)){
            return false;
        }
    }
    return true;
}

console.log(isPangram('The five boxing wizards jump quickly'));
