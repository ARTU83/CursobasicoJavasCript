console.log("Hello, World");
// h1 {color: red}
// .parafito {...}
// #pid {....}

const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.getElementById(".parrafito");
//const parrafito = document.querySelector(".parrafito");
const pid = document.getElementById("pid");
//const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(h1);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

console.log(input.value);
//h1.innerHTML = "Patito <br> Feo";  innerHtml: lo convierte todo en html perro es un problema de seguridad
h1.innerText = "Patito <br> Feo";
console.log(h1.getAttribute("pantalla")); //getAttribute: sirve para verificar si existe algun atributo en, en este caso seria atributo pantalla.
console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo"); se agrega el atributo rojo
h1.classList.add("rojo");
h1.classList.remove("Verde"); // remove: remueve atributo
//h1.classList.toggle('Verde');checar toggle
//h1.classList.contains('Verde');checar contains

input.value = "456"; // input.value  modifica el atributo value del input.
console.log(document.createElement("span"));
console.log(document.createElement("img"));

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://static.platzi.com/static/images/conf/logo_black@2x.png"
);
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);
