const input = document.getElementById("userInput");
const textDiv = document.getElementById("text");

// Save the original text content from the div
const originalText = textDiv.textContent;

// Function to highlight occurrences of a word considering word boundaries
function highlightWord(word, text) {
  if (!word) return text;

  const regex = new RegExp(`\\b(${word})\\b`, "gi");
  return text.replace(
    regex,
    '<span style="background-color: yellow;">$1</span>'
  );
}

// Function to handle the keyup event
function handleKeyUp(event) {
  const userInput = input.value.trim();

  if (userInput.length > 0) {
    const highlightedText = highlightWord(userInput, originalText);
    textDiv.innerHTML = highlightedText;
  } else {
    textDiv.innerHTML = originalText;
  }
}

// Listen for the 'keyup' event on the input
input.addEventListener("keyup", handleKeyUp);
