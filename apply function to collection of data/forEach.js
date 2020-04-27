// forEach method

//ex:1
let numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(element => {
    console.log(element * element)
});

//ex:2
numbers.forEach((element)=>{
    if(element % 2 == 0){
        console.log(element);
    }
})

console.log(numbers);

// ex:3
function isOdd(n){
    if(n % 2 !=0){
        console.log(n)
    }
}
numbers.forEach(isOdd);


//Example :
const movies=[{
    title:'Black Widow',
    genres:['Adventure','Actions'],
    ratting: 7.7
},
{
    title:'No Time To Die',
    genres:['Adventure','Thriller'],
    ratting:7.6
},
{
    title:'Mulan',
    genres:['Adventure','Actions'],
    ratting: 7.3
},
{
    title:'The Invisible Man',
    genres:['Horror','Thriller'],
    ratting: 7.2
}]

movies.forEach((movie)=>{
    console.log(`${movie.title.toUpperCase()}`);
})

//same output using for of & for loop 
for(let movie of movies){
    console.log(`${movie.title.toUpperCase()}`);
}

for(let i = 0 ; i < movies.length;i++){
    console.log(movies[i].title.toUpperCase());
}

movies.forEach((movie)=>{
    for(let movieGeneres of movie.genres){
        console.log(movieGeneres);
    }
})

const numbers= [2,25,36,99];

numbers.forEach((num,index,fullArr)=>{
    console.log(`Index:${index} Element: ${num} Full Array: ${fullArr}`);
})
