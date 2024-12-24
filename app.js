const modeBtn = document.querySelector(".mode-btn");
const loginWrapper = document.querySelector(".login-form-wrapper");
const loginBox = document.querySelector(".login-form-box");
const day = document.querySelector(".mode-day-img");
const night = document.querySelector(".mode-night-img");
const btn = document.querySelector(".login-form-btn");

modeBtn.addEventListener("click", () => {
    day.classList.toggle("have");
    night.classList.toggle("none");
    loginBox.classList.toggle("dark-bg");
    loginWrapper.classList.toggle("dark-mode");
    btn.classList.toggle("dark-btn");
});