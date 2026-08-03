document.addEventListener("DOMContentLoaded", () => {
  console.log("読み込みOK");

  const toAZ = document.querySelector(".kana-jp .switch-btn");

  toAZ.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("A-Zクリック");
  });
});
