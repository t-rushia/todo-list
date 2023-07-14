let toDoItems = [];
let suggestions = [
  "when was the last time you walked the dog?",
  "interesting, but when was the last time you bought toilet paper?",
  "okay but, does your car need an oil change?",
  "did you remember to pick the kids up from school or are they still waiting..",
  "did you leave the oven on before you left this morning?",
  "maybe should see how the divorce case with your laywer is going?",
  "wow well I guess you should get on that."
];
let suggestionMessage = document.querySelector("#suggestion-el");
const submitBtn = document.querySelector("#input-btn");

submitBtn.addEventListener("click", function () {
  let suggestionText =
    suggestions[Math.floor(Math.random() * suggestions.length)];
  suggestionMessage.textContent = suggestionText;
});
