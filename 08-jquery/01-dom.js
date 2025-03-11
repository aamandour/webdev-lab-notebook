// Ensure the DOM is fully loaded before accessing elements
$(document).ready(function () {
  // Part 1: Handling Click Event
  // When the user clicks the 'copy' button, copy the user input to the output area
  const userInput1 = $("#userInput1");
  const copyButton = $("#copy");
  const outputDiv1 = $("#output1");

  // Add an event listener for the click event
  copyButton.on("click", function () {
    const userInputText = userInput1.val();
    outputDiv1.text(userInputText);
  });

  // Part 2: Handling Input Event
  // When the user enters input text, copy the user input to the output area
  const userInput2 = $("#userInput2");
  const outputDiv2 = $("#output2");

  // Add an event listener for the input event
  userInput2.on("input", function () {
    const userInputText = userInput2.val();
    outputDiv2.text(userInputText);
  });
});
