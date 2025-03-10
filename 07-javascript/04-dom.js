// Ensure the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function () {
  // Exercise #1: Handling Click Event
  // Fetch JavaScript objects representing specific elements in the DOM
  const userInput1 = document.getElementById("userInput1");
  const copyButton = document.getElementById("copy");
  const outputDiv1 = document.querySelector(".output");

  // Add an event listener on the target element
  copyButton.addEventListener("click", function () {
    // Callback function to handle the event
    const userInputText = userInput1.value;
    outputDiv1.innerText = userInputText;
  });

  // Exercise #2: Handling Input Event
  // Fetch JavaScript objects representing specific elements in the DOM
  const userInput2 = document.getElementById("userInput2");
  const outputSection2 = document.querySelector("#inputEventExample p");

  // Add an event listener on the target element
  userInput2.addEventListener("input", function () {
    // Callback function to handle the event
    const userInputText = userInput2.value;
    outputSection2.innerText = userInputText;
  });
});
