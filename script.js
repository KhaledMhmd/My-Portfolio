const progress = document.querySelectorAll(".progress-done");
const backBtn = document.querySelector(".backBtn");

const goBack = function () {
  window.history.back();
};
backBtn.addEventListener("click", goBack);

progress.forEach(function (progress) {
  progress.style.width = progress.getAttribute("data-done") + "%";
});
