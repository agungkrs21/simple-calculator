const displyaBox = document.querySelector(".inner-display");
const listButton = document.querySelectorAll(".show-display");

//Show Number Fucntion
function showDisplay(event) {
  const x = event.target.innerHTML;
  if (displyaBox.value == 0) {
    return (displyaBox.value = x);
  }
  return (displyaBox.value += x);
}

// Result Function
function calculate() {
  let result = displyaBox.value;
  displyaBox.value = eval(result);
}

// Clear All Functin
function clearAll() {
  displyaBox.value = 0;
}

// Clear One by One Function
function clear() {
  let text = displyaBox.value;
  if (text.length === 1) {
    displyaBox.value = 0;
  } else {
    displyaBox.value = text.substring(0, text.length - 1);
  }
}

//Event

document.querySelector(".calculate").addEventListener("click", () => {
  calculate();
});
document.querySelector(".all-clear").addEventListener("click", () => {
  clearAll();
});
listButton.forEach((item) => {
  item.addEventListener("click", (e) => showDisplay(e));
});
document.querySelector(".clear-list").addEventListener("click", () => {
  clear();
});
