// FUNCTION 1: Welcomer
// Define a function called greeting that takes a name as a parameter and console logs "Hello " + name
function greeting (name){
  console.log("hello" + name)
}




// Call the greeting function with your name as the argument
greeting(" tof ")


// Prompt the user to enter their name
let user = prompt("enter ur name")


// Call the greeting function and pass in the user's name as an argument.
greeting(user)



// -------------------------------------------------
// FUNCTION 2: Adder
// Define a function called add that takes two numbers as parameters and returns the sum
function add(num1, num2){
return num1 + num2
}





// Call the add function and pass in any two numbers to test. Console log it (either directly or through a variable)! 
console.log(add(3,6))



// Prompt the user to enter one number
let user1 = prompt("enter a number")

// Prompt the user to enter another number
let user2 = prompt("enter another number")

// Call the add function and pass in the user's numbers. Console log it (either directly or through a variable)! 

console.log(add(user1,user2))





// Notice how the value that printed just put the numbers next to each other instead of adding them. That's because they're both strings!
// Use parseInt() on both of the user's numbers to make them into numbers (you can re-assign existing variables or declare new ones)
user1 = parseInt(user1)
user2 = parseInt(user2)

// Call the add function with the parsed number values from the user. Console log it and check that the math works correctly!
console.log(add(user1,user2))


// -------------------------------------------------
// FUNCTION 3: Calculator (Extra Credit)
// Define a function called takes in 3 parameters: operation, number1, and number2
// The function should use if/else if/else statements on the operation parameter to perform the correct calculation on the two numbers
// You should support "add", "subtract", "multiple", and "divide" operations
function takes (operation,number1,number2){
  
}


// Test it out with at least 2 different functions calls