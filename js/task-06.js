const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value;
  const requiredLength = inputElement.dataset.length;

  if (inputValue.length === Number(requiredLength)) {
    if (inputElement.classList.contains("invalid")) {
      inputElement.classList.replace("invalid", "valid");
    } else inputElement.classList.add("valid");
  } else {
    inputElement.classList.add("invalid");
  }
});
