// A simple program to convert kelvin to fahrenheit
let kelvinTemp = 301;

const celsiusTemp = kelvinTemp -273.15;

let fahrenheitTemp = celsiusTemp * (9/5)+32;
    fahrenheitTemp = Math.floor(fahrenheitTemp);
console.log(`The temperature  is: ${fahrenheitTemp} degrees fahrenheit.`);



