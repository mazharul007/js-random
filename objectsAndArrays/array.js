// some useful array methods with example:

let places = ["coxs bazar","Bandraban","St Martin", "Fizi","Chera Dip"];
places.push("Srimangal");
places[1]= "Nilgiri";
let myFavPlaces= places[0];
console.log(myFavPlaces);
console.log(places.length);
console.log(places);



let daysPartOne = ['sat','sun','mon','tue'];
let daysPartTwo = ['wed','thu','fri'];

let week = daysPartOne.concat(daysPartTwo);
console.log(week);


let weather = ['rainy','cold','chilly','snowy','cloudy','hot','warm','humid'];

let winter = weather.slice(0,5);
let summer = weather.slice(5);
console.log(winter,summer);

let winterX= weather.slice(-8,-3);
let summerX = weather.slice(-3);
console.log(winterX,summerX)
