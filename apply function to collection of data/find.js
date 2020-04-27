//Example :
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


const findAdvnetureMovies = movies.find(movieList=> movieList.genres.includes('Adventure'));
console.log(findAdvnetureMovies);

const findWithIndex = movies.find(movie => movie.genres.indexOf('Horror') === 0);
console.log(findWithIndex);


