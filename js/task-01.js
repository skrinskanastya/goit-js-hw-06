const categoriesList = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(function (item) {
  console.log(`Category: ${item.firstElementChild.textContent}
  Elements: ${item.lastElementChild.children.length}`);
});
