const status = document.querySelector("#status");
const messages = document.querySelector("#messages");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

function setStatus(value) {
  status.innerHTML = value;
}

function printMessage(value) {
  const li = document.createElement("li");
  li.innerHTML = value;
  messages.appendChild(li);
}
