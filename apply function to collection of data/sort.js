const numbers = [16,20,22,80,1990,78,19,200];

const sortedNumbersAsc = numbers.sort((a,b)=>a-b);
console.log(sortedNumbersAsc);

const sortedNumbersDsc = numbers.sort((x,y)=> y-x);
console.log(sortedNumbersDsc);

// sort something complicated
const movies=[{
    title:'Black Widow',
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
    rating: 7.3
},
{
    title:'The Invisible Man',
    genres:['Horror','Thriller'],
    rating: 7.2
}]


movies.sort((p,q)=> p.rating - q.rating);

console.log(movies);

