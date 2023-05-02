document.addEventListener("DOMContentLoaded", function() {
  const dices = document.getElementsByTagName("div");
  const pTags = document.getElementsByTagName("p");

  for (let elem of [...dices, ...pTags]) {
    elem.addEventListener("click", handleClick);
  }
});

function handleClick() {
  const NUMS = ["one", "two", "three", "four", "five", "six"];

  // decide if the dice or the p tag was clicked
  let currentElem = this.tagName == "DIV" ? this : this.previousSibling.previousSibling;

  // generate a new side such that it is not the same as the current side
  const currentSide = +currentElem.classList[0].slice(-1);
  let side = rand();
  while (side == currentSide) {
    console.log("conflicted, rolling again!");
    side = rand();
  }

  // display the side
  currentElem.classList = `side${side}`;
  let txt = currentElem.nextSibling;
  while (txt.nodeType != 1) {
    txt = txt.nextSibling;
  }
  txt.textContent = `You rolled a ${NUMS[side - 1]}`;
}

function rand() {
  const MIN = 1,
    MAX = 6;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}
