// example of every and some 
const words = ['bug', 'beg', 'bag', 'fog', 'log', 'tag'];

// checking every element if their length is three
const isThreeLetters = words.every(letter=>letter.length === 3);
console.log(isThreeLetters); 

// checking if every element from words array end with 'g'
const isEndsWithG  = words.every(letter=> {
    const last = letter.length -1;
    return letter[last] == 'g';  
})
console.log(isEndsWithG);


// some 
const someWords = ['bug', 'begs', 'bagAndMoney', 'fogs', 'logs', 'tag'];


const isFourLetter =someWords.some(letter=> letter.length === 4);
console.log(isFourLetter);

const isEndsWithY = someWords.some(letter=>{
    const last = letter.length-1;
    return letter[last] == 'y';
})
console.log(isEndsWithY);

const isIncMoney =  someWords.some(letter=> letter.includes('Money'));
console.log(isIncMoney);



// final example 
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

const allGoodMovies = movies.every(rating=> rating.rating>= 6.5);
console.log(allGoodMovies);

const moreThanOneGenres = movies.every(movie => movie.genres.length > 1);
console.log(moreThanOneGenres);









