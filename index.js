var buttonEl = document.querySelector("button");
var paragraphEl = document.getElementById("#paragraph");
var inputEl = document.querySelector("input");
var NameEl = document.querySelector(".name");
paragraphEl.innerHTML = "<b>Insert your name</b>";
buttonEl === null || buttonEl === void 0 ? void 0 : buttonEl.addEventListener("click", function () {
    var name = inputEl.value;
    NameEl.innerText = "Name: ".concat(name);
    inputEl.value = "";
});
