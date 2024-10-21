const inputElem = document.getElementById("input");
const outputMessage = document.getElementById("outputmessage");
const errorMessage = document.getElementById("errorMessage");

inputElem.addEventListener("input", handleInput);

function handleInput() {
  // Trim whitespace and get the value from the input field
  const value = inputElem.value.trim();

  // Clear previous messages
  errorMessage.textContent = "";
  outputMessage.textContent = "";

  // Remove any existing Bootstrap text classes from the output message
  outputMessage.classList.remove("text-success", "text-danger");

  // Check if the input value is a positive number
  if (!isPositiveNumber(value)) {
    errorMessage.textContent = "Please enter a positive number.";
    return; // Exit the function early
  }

  // Check if the input value is a palindrome
  if (isPalindrome(value)) {
    outputMessage.textContent = "The number is a palindrome.";
    outputMessage.classList.add("text-success");
  } else {
    outputMessage.textContent = "The number is not a palindrome.";
    outputMessage.classList.add("text-danger");
  }
}

// Function to check if the input value is a positive number
function isPositiveNumber(value) {
  const number = Number(value);
  return !isNaN(number) && number > 0;
}

// Function to check if the input value is a palindrome
function isPalindrome(value) {
  const reversedValue = value.split("").reverse().join("");
  return value === reversedValue;
}
