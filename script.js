function calculate() {
    const num1 = parseInt(document.getElementById("num1").value);  
    const num2 = parseInt(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
  
    let result;

    // Your code goes here
    // Hint: Write conditions for every possible value of operator and assign the result variable its new value  

    document.getElementById("result").textContent = result;
  }

let randomNumber, num_of_guesses;
randomNumber = Math.floor(Math.random() * 10) + 1;
num_of_guesses = 0;

function guessNumber() {
    const guess = parseInt(document.getElementById("guess").value);
    const result = document.getElementById("guess-result")

    // Your code goes here
    // Hint: use the Math.random() and Math.floor() functions.
    // You will need to use result.textContent to update the result

}

const taskList = document.getElementById("task-list");

function addTask() {
  const taskInput = document.getElementById("task-input");

  // Your code goes here
  // Hint: You will need to access the list item class methods and fields
  // Use listItem.textContent and taskList.appendChild(listItem) 
   
  const listItem = document.createElement("li");
  
}