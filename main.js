const ulElement = document.querySelector("ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button")

buttonElement.onclick = ev => {
  ev.preventDefault();

  if (inputElement.value) {

    const textElement = document.createElement("span")
    textElement.innerHTML = inputElement.value

    const btnElement = document.createElement("button");
    btnElement.innerHTML = "Remover";

    const liElement = document.createElement("li");

    liElement.appendChild(textElement);
    liElement.appendChild(btnElement);
    ulElement.appendChild(liElement);

    btnElement.onclick = () => {
      ulElement.removeChild(liElement);
    }

    inputElement.value = ""
  }
}
