const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameOutput.textContent = "Anonymous";
nameInput.addEventListener("input", (event) => {
  if (nameInput.value.length > 0) {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
