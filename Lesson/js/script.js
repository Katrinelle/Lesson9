// -----

// {/* <input value="Push me" onclick="alert('Click!')" type="button"></input>; */}

// -----
// додаємо кнопку в HTML
// створюємо функцію:
// при натисканні на кнопку Тест нас перекидає в google пошук Тест

// let form = document.createElement("form");
// form.action = "https://google.com/search";
// form.method = "GET";
// form.innerHTML = '<input name="q" value="Тест">';
// document.body.append(form);
// form.submit();

// -----
// створюємо меню з кнопками «Зберегти», «Завантажити», «Пошук» в HTML
//

// class Menu {
//   constructor(elem) {
//     this._elem = elem;
//     elem.onclick = this.onClick.bind(this); // (*)} save() {
//     alert("збереження");
//   }
//   load() {
//     alert("завантаження");
//   }
//   search() {
//     alert("пошук");
//   }
//   onClick(event) {
//     let action = event.target.dataset.action;
//     if (action) {
//       this[action]();
//     }
//   }
// }
// new Menu(menu);

// -----

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");
// const btn4 = document.querySelector("#btn4");
// const btn5 = document.querySelector("#btn5");

// // -- події на миш

// // для того, щоб console.log спрацював на click потрібна =>
// btn1.addEventListener("click", () => console.log("click"));
// // клікаємо на кнопку 1 - в консоль пише click
// btn2.addEventListener("contextmenu", () => console.log("contextmenu"));
// // contextmenu - спрацьовує, коли клацнулі на елемент правою кнопкою миші
// btn3.addEventListener("mouseover", () => console.log("mouseover"));
// // mouseover - спрацьовує, коли миша наводиться на кнопку
// btn3.addEventListener("mouseout", () => console.log("mouseout"));
// // mouseout - коли миша зникає з елементу
// btn4.addEventListener("mousedown", () => console.log("mousedown"));
// // mousedown
// btn4.addEventListener("mouseup", () => console.log("mouseup"));
// // mouseup
// btn5.addEventListener("mousemove", () => console.log("mousemove"));
// // mousemove - рух миші

// --

// -- події з клавіатурою

// const btn6 = document.querySelector("#btn6");

// btn6.addEventListener("keydown", () => console.log("keydown"));
// btn6.addEventListener("keyup", () => console.log("keyup"));
// keydown
// keyup

// -----
// видаляємо події

// const addBtn = document.querySelector("#add");
// const removeBtn = document.querySelector("#remove");
// const clickBtn = document.querySelector("#click");

// const handleClick = () => console.log("Hello");

// addBtn.addEventListener("click", () => {
//   clickBtn.addEventListener("click", handleClick);
// });
// // кликнули на кнопку Add > активували кнопку Click me

// // видаляємо функцію, яку створили вище
// removeBtn.addEventListener("click", () => {
//   clickBtn.removeEventListener("click", handleClick);
// });

// -----

// const clickBtn = document.querySelector("#click");

// const infoClick = (event) => {
//   console.log("event", event);
// };

// clickBtn.addEventListener("click", infoClick); // при кліку на кнопку - в консоль
// // видає інформацію про кнопку

// const infoClick = (event) => {
//   console.log("event", event.type);
// };

// clickBtn.addEventListener("click", infoClick); // при кліку на кнопку - event click

// const infoClick = (event) => {
//   console.log("event", event.target);
// };

// clickBtn.addEventListener("click", infoClick); // при кліку на кнопку - event і повний код з HTML

// -----

// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const login = loginInput.value;
//   const password = passInput.value;

//   //   console.log(login.value); // при вводі емейл в форму - видає його в консоль

//   console.log(`Логін: ${login}, пароль: ${password}`); // при вводі даних в форму - видає їх в консоль
//   form.reset(); // скидає всі дані при повторному натисканні на кнопку
// }

// -----

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const item = document.querySelector("#item");

// parent.addEventListener("click", () => console.log("CLICK parent"));
// child.addEventListener("click", () => console.log("CLICK child"));
// item.addEventListener("click", () => console.log("CLICK item"));
// // коли клікаємо на елемент - в консоль вертає цей елемент + всі попередні

// // обработчик
// const handleClick = (event) => {
//   console.log("event: ", event.target);
// };

// // вішаємо цей обработчик тільки на парент (на найвищого)
// parent.addEventListener("click", handleClick);
// // коли клікаємо на елемент - в консоль вертає цей елемент + код цього елементу з HTML

// const itemClick = (event) => {
//   console.log("itemClick stop");
//   event.stopPropagation();
// };

// const childClick = (event) => {
//   console.log("child stop");
//   event.stopPropagation();
// };

// const parentClick = (event) => {
//   console.log("parent stop");
//   event.stopPropagation();
// };

// parent.addEventListener("click", parentClick);
// child.addEventListener("click", childClick);
// item.addEventListener("click", itemClick);
// // коли клікаємо на елемент - в консоль вертає цей елемент + stop

// -----
// делегування

// const nav = document.querySelector(".nav");

// nav.addEventListener("click", handleClick);

// function handleClick(event) {
//   //   console.log(event.target); // видає в консоль код елемента з HTML
//   //   event.target.classList.add("active"); // при кожному кліку додаєм backgroundColor

//   // перевіремо, чи є цей class
//   const checkClass = nav.querySelector("li.active");

//   if (checkClass) {
//     event.target.classList.remove("active");
//   } else {
//     event.target.classList.add("active");
//   } // при кожному кліку додаєм і прибираємо backgroundColor
// }

// -----
// переносимо елемент по всюди

const ball = document.querySelector(".ball");

ball.onmousedown = function (event) {
  // центруємо мяч

  function move(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetWidth / 2 + "px";
  }

  // переносимо мяч під курсор
  move(event.pageX, event.pageY);

  function onMouseMove(event) {
    move(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);
  // мячик разом з мишкою (після кліку по ньому)пересувається по всьому полю
  // але він не скидається

  // відключення

  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
  };
  // мячик разом з мишкою (після кліку по ньому)пересувається по всьому полю
  // і скидаєтсья
};

// -----

//   ball.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//   };
// };
