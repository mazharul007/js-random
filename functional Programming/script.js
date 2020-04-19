// filter method 

let numbers=[2,77,9,28,100,108,87,90,54];

let evenNumber = numbers.filter(number=>{return number%2 == 0});
console.log(evenNumber);

let oddNumber = numbers.filter((number,index,fullArr)=>{return number%2 !=0 });
console.log(oddNumber);

