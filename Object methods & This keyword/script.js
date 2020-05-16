// shorthand object properties

const getStats = arr=>{

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum,r)=> sum+r);
    const avg = sum/ arr.length;

    return {max,min,sum,avg}
}

const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(getStats(numbers));