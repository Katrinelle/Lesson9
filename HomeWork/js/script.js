// Домашнє завдання

// -----1----

// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const buttonHidden = document.querySelector("#button");
// const textHidden = document.querySelector("#text");
// //   console.log(buttonHidden);
// //   console.log(textHidden);

// buttonHidden.addEventListener("click", () => {
//   textHidden.hidden = true;
// });

// -----2----

// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const buttonNew = document.querySelector("#button");

// buttonNew.addEventListener("click", (event) => {
//   buttonNew.style.display = "none";
// });

// -----3----

// Створіть дерево, яке показує/приховує дочірні вузли при кліці

document.getElementById("tree").addEventListener("click", function (event) {
  let target = event.target;

  if (target.tagName === "LI") {
    let children = target.querySelector("ul");
    if (children) {
      children.classList.toggle("hidden");
    }
  }
});

// const garden = document.querySelector("#garden");
// const tree = document.querySelector(".tree");
// const flowers = document.querySelector(".flowers");
// const decor = document.querySelector(".decor");

// garden.addEventListener("click", () => {
//   tree.ariaHidden = true;
// });

// garden.style.gap = "20px";
