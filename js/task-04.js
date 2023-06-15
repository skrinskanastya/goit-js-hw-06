const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueElem = document.querySelector("#value");

let counterValue = 0;
counterValueElem.textContent = counterValue;

decrementBtn.addEventListener("click", () => {
  counterValue--;
  counterValueElem.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  counterValueElem.textContent = counterValue;
});
