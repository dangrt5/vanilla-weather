window.onload = () => {
  init();
};

function init() {
  applyHandlers();
}

function applyHandlers() {
  document.querySelector(".btn").addEventListener("click", submitButtonHandler);
}

function submitButtonHandler(e) {
  e.preventDefault();
  alert("hi");
}
