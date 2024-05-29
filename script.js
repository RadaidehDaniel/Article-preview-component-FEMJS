const btn = document.querySelector(".btn");
const shareBox = document.querySelector(".share-container");

btn.addEventListener("click", () => {
  shareBox.classList.toggle("hide");
});

btn.addEventListener("focusout", () => {
  shareBox.classList.add("hide");
});
