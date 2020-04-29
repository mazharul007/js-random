//example 
const numbers = [2,2,2,2,2,2,2,2];

const sumOfNumbers = numbers.reduce((acc,cur)=> {
    return acc+cur;
},100);
console.log(sumOfNumbers);


//finding the max value from an array using reduce 

const randNumbers = [2,26,99,200,28,100];

const maxNumber = randNumbers.reduce((max,curr)=>{
        if(curr > max ) return curr;
        return max;

        // alternative 
        // return Math.max(max,curr);
})
console.log(maxNumber);

//finding the min value from an array using reduce 

const minNumber = randNumbers.reduce((min,curr)=>{
    if(curr > min) return min;
    return curr;

    // alternative 
    // return Math.min(min,curr);
})
console.log(minNumber);


// array to obj using reduce
const votes = ['yes','no','yes','yes','yes','yes','yes','no','absent','no','absent']

const result = votes.reduce((acc, cur)=>{
    (acc[cur]) ?  acc[cur]++ : acc[cur] = 1;
    return acc; 
},{})
console.log(result);

// another example: group movies by rating 
const movies=[{
    title:'The Black Widow',
    genres:['Adventure','Actions'],
    rating: 7.7
},
{
    title:'No Time To Die',
    genres:['Adventure','Thriller'],
    rating:7.6
},
{
    title:'Mulan',
    genres:['Adventure','Actions'],
    rating: 5.3
},
{
    title:'The Invisible Man',
    genres:['Horror','Thriller'],
    rating: 4.2
}]


const topRatedMovies = movies.reduce((topRated,movie)=>{
    const rating = Math.floor(movie.rating);
    if(!topRated[rating]) topRated[rating] =[];
    topRated[rating].push(movie.title);
    return topRated;
},{})

console.log(topRatedMovies);








