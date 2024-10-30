const input = document.getElementById("userInput");
const textDiv = document.getElementById("text");

// Function to highlight occurrences of a word
function highlightWord(word, text) {
  if (!word) return text; // If no word is entered, return original text
  const regex = new RegExp(`(${word})`, "gi"); // Create a case-insensitive regex
  return text.replace(
    regex,
    '<span style="background-color: yellow;">$1</span>'
  );
}

// Event handler for keydown event
function handleKeyDown(event) {
  // Delay processing until the key has been processed by the browser
  setTimeout(() => {
    const userInput = input.value.trim(); // Get user input and trim whitespace
    const originalText = textDiv.textContent; // Get original text content from the div

    if (userInput.length > 0) {
      // Highlight occurrences of the word in the text
      const highlightedText = highlightWord(userInput, originalText);
      textDiv.innerHTML = highlightedText;
    } else {
      // If input is empty, reset to original text
      textDiv.innerHTML = originalText;
    }
  }, 0);
}

input.addEventListener("keydown", handleKeyDown);
