const ilaw_active = document.getElementById('ilaw');
let active = true;
const searchBar = document.getElementById("search-bar");
const searchBar_style = document.querySelector(".search-bar")
const autocompleteList = document.getElementById("autocomplete-list");
const searchButton = document.getElementById("search-button");

document.addEventListener('click', function(event) {

    const menuToggle = document.getElementById('menu-toggle');
  
    const hamburger = document.querySelector('.hamburger');
  

    // Check if the click was outside the hamburger and the menu
    if (!hamburger.contains(event.target) && !menuToggle.contains(event.target)){
        menuToggle.checked = false;
    }
  });

ilaw_active.addEventListener('click', () => {
    if (active){
        document.body.style.backgroundColor = 'white';
        active = false;
        console.log(active);
    } else if (!active){
        document.body.style.backgroundColor = '#03081a';
        active = true;
        console.log(active);
    }
});

// Sample data for autocomplete
const mangaTitles = [
  "Magic Emperor",
  "Solo Leveling",
  "Tower Of God",
  "One Piece",
  "Jujutsu Kaisen",
  "Vinland Saga",
  "Chronicles Of The Demon Faction"
];

// Event listener for input
searchBar.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  autocompleteList.innerHTML = ""; // Clear previous suggestions

  if (!query) return;

  const filteredTitles = mangaTitles.filter(title =>
    title.toLowerCase().includes(query)
  );

  if (filteredTitles.length === 0) {
    const noResult = document.createElement("div");
    noResult.textContent = "No results found";
    noResult.style.color = "#a5a8ac";
    autocompleteList.appendChild(noResult);
    return;
  }

  filteredTitles.forEach(title => {
    const suggestion = document.createElement("div");
    suggestion.textContent = title;
    suggestion.addEventListener("click", function () {
      searchBar.value = title; // Set the selected value
      autocompleteList.innerHTML = ""; // Clear suggestions
    });
    autocompleteList.appendChild(suggestion);
  });
});

// Add event listener to the button
searchButton.addEventListener("click", function () {
  const query = searchBar.value.trim().toLowerCase();

  // Redirect to magic_emperor.html if "Magic Emperor" is selected
  if (query === "magic emperor") {
    window.location.href = "magic_emperor.html";
  } else {
    searchBar.style.background = "red";
    setTimeout(() => {
      searchBar.style.background = "";
    },1000); 
  }
});

// Close the autocomplete list when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-container")) {
    autocompleteList.innerHTML = "";
  }
});