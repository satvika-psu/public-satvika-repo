const elem = document.querySelector("input");
const container = document.querySelector(".container");
const errorMessage = document.createElement("div");
errorMessage.style.fontSize = "14px";
errorMessage.style.marginTop = "5px";

container.appendChild(errorMessage);

elem.addEventListener("input", handleInput);

function handleInput() {
  const value = elem.value.trim();
  errorMessage.textContent = "";

  if (!isPositiveNumber(value)) {
    errorMessage.textContent = "Please enter a positive number.";
    errorMessage.style.color = "red";
    return;
  }

  if (isPalindrome(value)) {
    errorMessage.textContent = "The number is a palindrome.";
    errorMessage.style.color = "green";
  } else {
    errorMessage.textContent = "The number is not a palindrome.";
    errorMessage.style.color = "red";
  }
}

function isPositiveNumber(value) {
  const number = Number(value);
  return !isNaN(number) && number > 0;
}

function isPalindrome(value) {
  const reversedValue = value.split("").reverse().join("");
  return value === reversedValue;
}
