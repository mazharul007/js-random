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