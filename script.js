document.addEventListener("DOMContentLoaded", () => {
  const jpGroup = document.querySelector(".kana-jp");
  const enGroup = document.querySelector(".kana-en");

  const toAZ = document.querySelector(".kana-jp .switch-btn");
  const toJP = document.querySelector(".kana-en .switch-btn");

  toAZ.addEventListener("click", (e) => {
    e.preventDefault();
    jpGroup.style.display = "none";
    enGroup.style.display = "flex";
  });

  toJP.addEventListener("click", (e) => {
    e.preventDefault();
    enGroup.style.display = "none";
    jpGroup.style.display = "flex";
  });

const searchInput = document.querySelector(".song-search");
const cards = document.querySelectorAll(".song-card");
  
});
