const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersContainer = document.querySelector(".letters");
const ArrayLetter = Array.from(letters);
const categorySpan = document.querySelector(".category span");
const LetterGuess = document.querySelector(".letters-guess ");
const HangMan = document.querySelector(".hangman-draw");
ArrayLetter.forEach((letter) => {
  const span = document.createElement("span");
  const letee = document.createTextNode(letter);
  span.append(letee);
  lettersContainer.append(span);
  span.classList.add("letter-box");
});
const word = {
  Programming: [
    "php",
    "c",
    "laravel",
    "flutter",
    "javascript",
    "json",
    "html",
    "css",
  ],
  Name: [
    "amr",
    "ahmad",
    "nour",
    "majed",
    "mohammed",
    "zohir",
    "hozaifa",
    "abd alrahman",
    "islam",
    "bashar",
    "ibrahim",
    "hazem",
    "baraa",
    "omar",
  ],
  Countries: ["syria", "egybt", "palastine", "yamen", "qatar"],
};
const ArrayWord = Object.keys(word);
const RandomWordNum = Math.floor(Math.random() * ArrayWord.length);
const RandomWordName = ArrayWord[RandomWordNum];
const PropValueName = word[RandomWordName];
const PropValueNum = Math.floor(Math.random() * PropValueName.length);
// the chosen word
const PropValueValue = PropValueName[PropValueNum];
console.log(PropValueValue);
categorySpan.innerHTML = RandomWordName;
const ArrayChosen = Array.from(PropValueValue);
let success = 0;
ArrayChosen.forEach((value) => {
  const span = document.createElement("span");
  if (value == " ") {
    span.classList.add("space");
    success++;
  }
  LetterGuess.append(span);
});
let Wrong = 0;
const GuessSpan = document.querySelectorAll(".letters-guess span");

lettersContainer.addEventListener("click", (eo) => {
  let title = false;
  if (eo.target.classList == "letter-box") {
    eo.target.classList.add("clicked");

    const letterChosen = eo.target.innerHTML.toLowerCase();

    ArrayChosen.forEach((value, index) => {
      if (letterChosen == value) {
        title = true;
        console.log(`Found at index ${index}`);
        GuessSpan.forEach((valueSpan, indexSpan) => {
          if (index == indexSpan) {
            valueSpan.innerHTML = letterChosen;
            success++;
            if (success == ArrayChosen.length) {
              const div = document.createElement("div");
              const text = document.createTextNode(
                `Congratulations Your Failed Attempt Is ${Wrong}`
              );
              div.append(text);
              document.body.append(div);
              div.classList.add("pope");
            }
          }
        });
      }
    });
    if (title == false) {
      Wrong++;
      HangMan.classList.add(`wrong-${Wrong}`);
      if (Wrong == 10) {
        lettersContainer.classList.add("finish");
        endgame();
      }
      document.getElementById("fail").play();
    } else {
      document.getElementById("success").play();
    }
  }
});
function endgame() {
  document.getElementById("lose").play();
  const div = document.createElement("div");
  const divContainer=document.createElement("div")
  const text = document.createTextNode(
    ` You Are Loser The Correct Answer Is ${PropValueValue}`
  );
  divContainer.append(div)
  divContainer.classList.add("popContainer")
  div.append(text);
  document.body.append(divContainer);
  div.classList.add("pop");
}
