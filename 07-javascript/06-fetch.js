const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");
const loadingImg = document.getElementById("loading");

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  try {
    // Show the loading image
    loadingImg.style.display = "block";

    // Fetch data from the API
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Create elements for each book
    data.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("mb-3", "w-75", "mx-auto");
      bookElement.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${book.name}</h5>
          <p class="card-text">Author: ${book.authors.join(", ")}</p>
          <p class="card-text">Publication Year: ${book.released}</p>
          <p class="card-text">Number of Pages: ${book.numberOfPages}</p>
        </div>
      `;
      app.appendChild(bookElement);
    });

    // Hide the loading image
    loadingImg.style.display = "none";
  } catch (error) {
    console.error("Failed to fetch data:", error);
    loadingImg.style.display = "none";
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to load books.";
    app.appendChild(errorMessage);
  }
};

fetchData(url);
