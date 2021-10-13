let input = document.querySelector("input");

let name = "";

let h1 = document.createElement("h1");
h1.textContent = `Dame tu nombre`;

document.body.appendChild(h1);

input.onchange = (event) => {
  name = event.target.value;
  h1.textContent = `Tu nombre es: ${name}`;
};
