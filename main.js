const ilaw_active = document.getElementById('ilaw');
let active = true;

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

const searchBar = document.getElementById("search-bar");
const autocompleteList = document.getElementById("autocomplete-list");
const searchButton = document.getElementById("search-button");

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
    alert("Please select a valid manga title!");
  }
});

// Close the autocomplete list when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-container")) {
    autocompleteList.innerHTML = "";
  }
});

const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const featuredTitle = document.querySelector(".featured-title");
const featuredDescription = document.querySelector(".featured-description");
const featuredImage = document.querySelector(".featured-image img");

const featuredData = [
  {
    title: "Black Clover",
    description:
      "“In a world where magic is everything, Asta, a boy born without any magical abilities, dreams of becoming the Wizard King. With his determination and anti-magic sword, he embarks on a journey to defy fate and prove his worth in the Clover Kingdom's magical society.”",
    image: "https://i.ibb.co/3h3J7Xk/black-clover.jpg",
  },
  {
    title: "Solo Leveling",
    description:
      "“Follow the journey of Sung Jin-Woo, the weakest hunter, as he rises to become the strongest through a mysterious leveling system.”",
    image: "https://ww16.sololeveling-manga.net/wp-content/uploads/2023/07/solo-leveling-manga.webp",
  },
  {
    title: "Magic Emperor",
    description:
      "“Zhuo Yifan, the Magic Emperor, is betrayed and reincarnated into the body of a servant. Follow his journey of revenge and redemption.”",
    image: "https://i.ibb.co/56FThpL/Magic-Emperor-Cover.webp",
  },
];

let currentSlide = 0;

function updateSlider() {
  const { title, description, image } = featuredData[currentSlide];
  featuredTitle.textContent = title;
  featuredDescription.textContent = description;
  featuredImage.src = image;
}

sliderPrev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + featuredData.length) % featuredData.length;
  updateSlider();
});

sliderNext.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % featuredData.length;
  updateSlider();
});

// Initialize the slider
updateSlider();