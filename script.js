const firstName = prompt("What is your name?");
const lastName = prompt("What is your lastname?");
const color = prompt("What is your favourite colour?");

let passwordGenerator =
  firstName.slice(0, 1) +
  lastName.slice(1, 6) +
  color.slice(1, 3) +
  Math.floor(Math.random() * 201);

alert(passwordGenerator);
