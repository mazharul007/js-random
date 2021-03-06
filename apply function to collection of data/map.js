const numbers = [12,22,28,9];

const modifiedNumbers = numbers.map((num)=>{
    return num *2;
})

console.log(modifiedNumbers);
console.log(numbers);

const objectFromNumbers = numbers.map((num)=>{
    return{
        value : num,
        isEven: num %2
    }
})

console.log(objectFromNumbers);


const words = ['BSC', 'MBBS' , 'BBA', 'MBA' ];
const reversedWords = words.map((el)=>{
    return el.toUpperCase().split("").join(".");
})
console.log(reversedWords);


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

const movieTitle = movies.map((title)=>{
    return title.title.toUpperCase();
}) 
console.log(movieTitle);

const numbersList = [2,3,46,8,9,11,17];
const oddOrEven = numbersList.map(numb=>{
    if(numb % 2 === 0) return 'Even';
    return 'Odd';
})
console.log(oddOrEven);