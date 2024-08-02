
//Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.//
function isLeapYear(year) {
    // A year is a leap year if:
    // 1. It is divisible by 4
    // 2. It is not divisible by 100, unless it is also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It is a leap year
    } else {
        return false; // It is not a leap year
    }
}

// Example usage:
const year = parseInt(prompt('Enter a year:'));
const result = isLeapYear(year);

console.log(`${year} is ${result ? 'a leap year' : 'not a leap year'}`);



//Develop a program that asks the user for the current temperature and whether it is raining or not.// 
function getClothingAdvice(temperature, isRaining) {
    let advice = '';

    // Determine clothing advice based on temperature and rain
    if (isRaining) {
        advice += 'It is raining. ';
        advice += temperature < 60 ? 'Wear a raincoat and bring an umbrella. ' : 'Wear a raincoat.';
    } else {
        advice += temperature < 60 ? 'Wear a jacket. ' : 'Wear light clothing.';
    }

    // Additional advice based on temperature
    if (temperature < 32) {
        advice += 'It\'s very cold. Consider wearing warm layers.';
    } else if (temperature > 85) {
        advice += 'It\'s quite hot. Make sure to stay hydrated and wear sunscreen.';
    }

    return advice;
}

// Get user input
const temperature = parseInt(prompt('Enter the current temperature (in Fahrenheit):'));
const isRaining = prompt('Is it raining? (yes/no)').toLowerCase() === 'yes';

// Get clothing advice
const clothingAdvice = getClothingAdvice(temperature, isRaining);

// Display the advice
console.log(clothingAdvice);
