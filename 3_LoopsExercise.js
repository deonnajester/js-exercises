// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let k = 1; k <= 5; k++) {
  console.log(k);
}       
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// While loop counting down from 10 to 1
let m = 10;
while (m >= 1) {
  console.log(m);
  m--;
}

// Do while loop counting down from 10 to 1
let n = 10;
do {
  console.log(n);
  n--;
} while (n >= 1);

// For loop counting down from 10 to 1
for (let o = 10; o >= 1; o--) {
  console.log(o);
}       

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// While loop from 7 to 27
let p = 7;
while (p <= 27) {
  console.log(p);
  p++;
}

// Do while loop from 7 to 27
let q = 7;
do {
  console.log(q);
  q++;
} while (q <= 27);

// For loop from 7 to 27
for (let r = 7; r <= 27; r++) {
  console.log(r);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// While loop counting by tens from 0 to 100
let s = 0;
while (s <= 100) {
  console.log(s);
  s += 10;
}

// Do while loop counting by tens from 0 to 100
let t = 0;
do {
  console.log(t);
  t += 10;
} while (t <= 100);

// For loop counting by tens from 0 to 100
for (let u = 0; u <= 100; u += 10) {
  console.log(u);
}   

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
// The loop is infinite because the condition counterFour < 2 is always true when counterFour starts at 1 and is decremented.
// To fix it, we want the loop to stop when counterFour is equal to -100.
while (counterFour > -100) {
  console.log("HELP ME!");
  counterFour--;
}   

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favoriteNumber = 7; // Replace 7 with your favorite integer
for (let i = 0; i <= favoriteNumber; i++) {
  console.log(i);
}   

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favoriteNumber2 = 42; // Replace 42 with your favorite integer less than 100
for (let i = 0; i <= 100; i++) {
  if (i === favoriteNumber2) {
    console.log(i, "my favorite number!");
  } else {
    console.log(i, "not my favorite number");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// Loops in real life are useful for repeating tasks without having to write the same code multiple times. 
// For example, if you need to process a list of items, a loop can go through each item one by one. 
// While loops are good when you don't know in advance how many times you'll need to repeat, 
// for loops are good when you know the exact number of iterations, and do-while loops are useful 
// when you need the loop to run at least once regardless of the condition.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Commit your file to GitHub.