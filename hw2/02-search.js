// Select input elements
const userInput = document.getElementById("userInput");
const searchButton = document.querySelector('input[type="button"]');
const searchResults = document.getElementById("searchResults");

// Function to create Bootstrap card with highlighted search term
const createCard = (character, searchString) => {
  const highlightedName = character.name.replace(
    new RegExp(`(${searchString})`, "gi"), // Create a case-insensitive regex
    '<mark style="background-color: yellow; color: black;">$1</mark>' // Wrap matched text in <mark> tags
  );

  return `
    <div class="card m-5" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${highlightedName}</h5>
        <p class="card-text">Birth Year: ${character.birth_year}</p>
      </div>
    </div>
  `;
};

// Function to display matching characters
const displayCharacters = (characters, searchString) => {
  // Clear any existing search results
  searchResults.innerHTML = "";
  // Create a container for the cards
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("d-flex", "flex-wrap", "justify-content-center");

  // If no characters match the search, show a message
  if (characters.length === 0) {
    searchResults.innerHTML += `<p class="text-center mt-4">No characters found.</p>`;
  } else {
    // Append each character card to the container
    characters.forEach((character) => {
      cardContainer.innerHTML += createCard(character, searchString);
    });
    searchResults.appendChild(cardContainer);
  }
};

// Function to handle the search
const handleClick = () => {
  const searchString = userInput.value.toLowerCase();

  // Filter characters based on user input
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchString)
  );

  // Display matching characters
  displayCharacters(filteredCharacters, searchString);
};

// Event listener for the search button click
searchButton.addEventListener("click", handleClick);
