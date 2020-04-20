// filter method 

let numbers=[2,77,9,28,100,108,87,90,54];

let evenNumber = numbers.filter(number=>{return number%2 == 0});
console.log(evenNumber);

let oddNumber = numbers.filter((number,index,fullArr)=>{return number%2 !=0 });
console.log(oddNumber);

// filter another example:

let forecast = [
    {day:'sun',sun:true},
    {day:'mon',sun:true},
    {day:'tue',sun:false},
    {day:'wed',sun:true},
    {day:'thu',sun:false},
    {day:'fri',sun:false},
    {day:'sat',sun:true}
]
let sunnyDay = forecast.filter((obj)=> {return obj.sun === true});
console.log(sunnyDay);


// map example
let sunnyDayArr = forecast.map((isSunny)=> {return isSunny.sun});
console.log(sunnyDayArr);

let serialNumber = [1,23,4,5,6,7,8,9];

let squareNumber = serialNumber.map(item=>item*item);
console.log(squareNumber);

// reduce:
let arrayOfNumber = [1,2,3,4];

// let sumOfArray= arrayOfNumber.reduce(function(sum,item){
//     return sum += item;
// },0)
// console.log(sumOfArray);
let sumOfArray = arrayOfNumber.reduce((sum,item)=> sum+=item,10);
console.log(sumOfArray);

