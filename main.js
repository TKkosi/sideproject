KELVIN CONVERTER
//the value of kelvin
const kelvin = 293 
//the value of celsius
const celsius = kelvin - 273
//Use the provided formula to assign the correct value to fahrenheit
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);


DOG YEAR CONVERTER

let myAge = 21
// user information
let earlyYears = 2
// variable with value 2 
earlyYears *= 10.5

let laterYears = myAge - 2
laterYears *= 4

console.log(earlyYears)
console.log(laterYears)
let myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears) 

let myName = 'kosi'.toLowerCase()
console.log(myName)

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years `)

Magic Eight Ball

let userName = ''//'kosi'
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion ='will it rain today?'
console.log(userQuestion)
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)
let eightBall = ' '
switch(randomNumber){
    case 6:
        console.log('Signs point to yes')
        break;
    case 5:
        console.log('It is certain');
        break;
    case 4:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 2:
        console.log('Cannot predict now');
        break;
    case 1:
        console.log('Do not count on it');
        break;
    case 0:
        console.log('My sources say no');
        break;
    default :
        console.log('Outlook not so good');
        break;  
}