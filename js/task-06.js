const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value;
  const requiredLength = inputElement.dataset.length;

  if (inputValue.length === Number(requiredLength)) {
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.add("invalid");
  }
});
