//Basic JavaScript Practice
//[Problem 1] - Convert Inches to Meters
//Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

//Hint: 1 meter equals 39.3701 inches.

//Results
// input	outputs
//metersToInches(0)	0
//metersToInches(1)	39.3701
//metersToInches(1.5)	59.05515
//metersToInches(15.6)	614.17356

function metersToInches(meters){
    return meters * 39.3701;
}

//[Problem 2] - Loop n Times
//Write a function named loopThrough that takes an argument that is a number and loops through and prints a message “Hello World” that number of times.

//Bonus: After each "Hello world" exept the last add a comma. Example loopThrough(3) = Hello world, Hello world, Hello world

//Results
//input	outputs
//loopThrough(0)	Nothing displayed
//loopThrough(1)	Message displayed 1 time
//loopThrough(3)	Message displayed 3 times

function loopThrough(number) {
    return number * "Hello World, ";
}

//[Problem 3] - Even or Odd
//Create a function that accepts an integer and checks if it's even or odd.

//Results
//input	outputs
//evenOrOdd(1)	Odd
//evenOrOdd(2)	Even
//evenOrOdd(5)	Odd


function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//
//[Problem 4] - Working with Objects
//Create an object called Person which has the name of a person as a string, 
// and their age as a number. The Person object should have a method called 
// describe which returns a string with the following syntax: "name, age years old". 
// So for example, if John is 19 years old then the function describe of his object 
// will return "John, 19 years old".

var Person = {"name":, "age":}

//[Problem 5] - Math.random
//Review the Math.random fuction here and write a function with an
//if statement that console.log's "Over 1.5" if Math.random returns a number 
//greater than 1.5 Otherwise console.log "Under 1.5".

function checkRandom() {
    let number = Math.random();

    if (number > 1.5) {
        console.log("Over 1.5");
    } else {
        console.log("Under 1.5");
    }
}


//[Problem 6] - Splice method
//In the examples below, use splice to convert the first array to the second array:

//[2, 3, 4, 5] ➞ [2, 4, 5]
let arr = {2,3,4,5} // The difference that I see is that 3 is missing in the from the secound set. 
// I have been wanting youtube videos to try and understand how to create the function. I can confidently 
// set the arr however I get stuck moving past this part. 

//["alpha", "gamma", "delta"] ➞ ["alpha", "beta", "gamma", "delta"]
let arr = {"alpha", "gamma", "delta"} // The difference in this set is that beta is added in the secound set. 

//[10,-10,-5,-3,2,1] ➞ [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let arr = {10, -10, -5, -3, 2, 1} // The trend in this one is that in the secound set instead of the numbers being listed 
// at random, the secound array decline starting at 10 and ending at 1. I have entered what I understand. I get confused 
// on how to move on from here. 


//[Problem 7] - While Loops
//Write a function with a while loop that prints the multiples of 5 from 5 to 50 inclusive

//Results
//5, 10, 15, 20 ...

let i = 5;
while (i <= 50) {
    console.log(i);
    i +=5;
}



//[Problem 8] - String Manipulation
//Write a function that takes a string as a parameter and convert it from camelCase to Title Case

// I am stumped with this as well. What I do know is that I would need to start with (function) and the 
// perameter would be string. I have tried to use my resources from the prework to help determine the 
// process without AI. camelCase is "myName" and Title Case is " My Name".

function toTitleCase(str) {
    return ???????
}

//Results
//input	outputs
//toTitleCase("myName")	My Name
//toTitleCase("helloWorld")	Hello World
//toTitleCase("countToTen")	Count to Ten
//

/
