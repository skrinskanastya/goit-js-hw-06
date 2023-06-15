const fontSizeControlElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

fontSizeControlElem.addEventListener("input", () => {
  const fontSize = fontSizeControlElem.value + "px";
  textElem.style.fontSize = fontSize;
});
