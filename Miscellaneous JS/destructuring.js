// destructuring arrays 
const animals = ['cow','Tiger','sparrow','crow','hummingBird'];

const [domestic, animal,bird] = animals;

domestic;
animal;
bird;

const [,an,,...birds] = animals;

an;
birds;


// destructuring arrays 
const singleMovie={
    title:'Black Widow',
    genres:['Adventure','Actions'],
    rating: 7.7
}

const {title,...others } = singleMovie;
title;
others;

// nested destructing 
const movies=[{
    name:'Black Widow',
    genres:['Adventure','Actions'],
    rating: 7.7
},
{
    name:'No Time To Die',
    genres:['Adventure','Thriller'],
    rating:7.6
},
{
    name:'Mulan',
    genres:['Adventure','Actions'],
    rating: 7.3
},
{
    name:'The Invisible Man',
    genres:['Horror','Thriller'],
    rating: 7.2
}]

const [{name:actionMovie},{rating}] = movies;

actionMovie;
rating;

const [,,,horrorMovie] = movies;
const {name:horrorName} = horrorMovie;
horrorName;








