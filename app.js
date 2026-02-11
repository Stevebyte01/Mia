// Simple password protection and quote randomization
const VALID_USERNAME = "Mama_mia";
const VALID_PASSWORD = "150500";

// Array of images to display randomly
const images = [
  "Screenshot 2026-02-11 at 06.48.51.png",
  "Screenshot 2026-02-11 at 06.49.15.png",
  "Screenshot 2026-02-11 at 06.49.38.png",
  "Screenshot 2026-02-11 at 06.49.51.png",
  "Screenshot 2026-02-11 at 06.50.09.png",
  "Screenshot 2026-02-11 at 06.51.28.png",
  "Screenshot 2026-02-11 at 06.51.40.png",
  "Screenshot 2026-02-11 at 06.51.52.png",
  "Screenshot 2026-02-11 at 06.52.03.png",
  "Screenshot 2026-02-11 at 06.52.32.png",
];

let currentQuoteInterval;

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const loginScreen = document.getElementById("loginScreen");
  const quoteScreen = document.getElementById("quoteScreen");
  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");
  const quoteText = document.getElementById("quoteText");
  const quoteType = document.getElementById("quoteType");
  const nextQuoteBtn = document.getElementById("nextQuote");
  const logoutBtn = document.getElementById("logoutBtn");

  // Login handler
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      errorMsg.textContent = "";
      loginScreen.classList.remove("active");
      quoteScreen.classList.add("active");
      showRandomQuote();
      startQuoteRotation();
    } else {
      errorMsg.textContent = "Invalid username or password";
      document.getElementById("password").value = "";
    }
  });

  // Show random quote and image
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = quote.text;
    quoteType.textContent = quote.type;

    // Also show a random image
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImage = document.getElementById("randomImage");
    randomImage.src = images[randomImageIndex];
  }

  // Start automatic quote rotation every 5 minutes
  function startQuoteRotation() {
    if (currentQuoteInterval) {
      clearInterval(currentQuoteInterval);
    }
    currentQuoteInterval = setInterval(showRandomQuote, 5 * 60 * 1000);
  }

  // Next quote button
  nextQuoteBtn.addEventListener("click", function () {
    showRandomQuote();
    startQuoteRotation(); // Reset the 5-minute timer
  });

  // Logout handler
  logoutBtn.addEventListener("click", function () {
    if (currentQuoteInterval) {
      clearInterval(currentQuoteInterval);
    }
    quoteScreen.classList.remove("active");
    loginScreen.classList.add("active");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    errorMsg.textContent = "";
  });
});
