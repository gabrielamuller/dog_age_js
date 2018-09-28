/*// Here's how you convert your age to dog years:

The first two human years of a dog's life count as 10.5 dog years each.
Each human year following counts as 4 dog years.*/

// Your age
let myAge = 26;

// First two human years
let earlyYears = 2;
earlyYears *= 10.5;

// Later Years
let laterYears = myAge - 2;
laterYears *= 4;

// Early years and later years together
const myAgeInDogYears = earlyYears + laterYears;

// Your name
const myName = 'Gabriela'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} in dog years.`);