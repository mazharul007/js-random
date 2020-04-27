// filter example

//Example :
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

const topRatedMovies = movies.filter(movie=>movie.rating >= 7.00);
console.log(topRatedMovies);


// filtering by genres

const filterByGenres = movies.filter(byGenre=>byGenre.genres.includes("Adventure"));

console.log(filterByGenres);

//Example 