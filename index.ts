const buttonEl = document.querySelector("button");
const paragraphEl = document.getElementById("#paragraph");
const inputEl = document.querySelector("input");
const NameEl = document.querySelector(".name") as HTMLParagraphElement;

(paragraphEl as HTMLElement).innerHTML = "<b>Insert your name</b>";

buttonEl?.addEventListener("click", () => {
  const name = inputEl.value;
  NameEl.innerText = `Name: ${name}`;
  inputEl.value = "";
});
