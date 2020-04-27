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


const findAdvnetureMovies = movies.find(movieList=> movieList.genres.includes('Adventure'));
console.log(findAdvnetureMovies);

const findWithIndex = movies.find(movie => movie.genres.indexOf('Horror') === 0);
console.log(findWithIndex);


