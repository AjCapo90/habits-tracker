import MyInput from "./components/my-input/my-input.js";
import { add } from "./sum.js";
const buttonEl = document.querySelector("button");
const paragraphEl = document.getElementById("#paragraph");
const inputEl = document.querySelector("input");
const NameEl = document.querySelector(".name");
paragraphEl.innerHTML = "<b>Insert your name</b>";
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener("click", () => {
    const name = inputEl === null || inputEl === void 0 ? void 0 : inputEl.value;
    NameEl.innerText = `Name: ${name}`;
    inputEl.value = "";
});
console.log(add(2, 3));
customElements.define("my-input", MyInput);
