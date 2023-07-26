//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");

window.onscroll = function () {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > posHight - 12000) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
};

tap_top_btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};
