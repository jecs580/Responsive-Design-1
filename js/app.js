const toggle = document.querySelector(".switch");
const checkbox = document.querySelector("#checkbox");
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
}
checkbox.addEventListener("change", function (event) {
  if (this.checked) {
    // console.log("checkeado, modo dark");
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");
  } else {
    // console.log("checkeado, modo light");
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
});
