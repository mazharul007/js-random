//challenge two : function to find the avg value in array of number

function avg(numbers){
    let total = 0;

    for(let number of numbers){
        total += number;
    }
    return  total/numbers.length;
}

console.log(avg([0,50]));