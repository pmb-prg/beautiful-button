const key = document.querySelector(".key");
const light = document.querySelector("#light");
const radio = document.querySelector(".rgb");
const mode = document.querySelector(".mode");
const show1 = document.querySelector(".show1");
const show2 = document.querySelector(".show2");
let bool = false;
key.addEventListener("click", () => {
    if (bool === false) {
        light.style.backgroundColor = "#ff0000";
        light.style.boxShadow = "0 0 15px 2px #f00000";
        key.style.boxShadow = "0 0 2px 2px rgba(0, 0, 0, 1.63)";
        show1.style.filter = "brightness(1)";
        bool = true;
    } else {
        light.style.backgroundColor = "#fff";
        light.style.boxShadow = "none";
        key.style.boxShadow = "0 0 7px 5px rgba(0, 0, 0, 0.833), inset 0 0 2px rgba(255, 255, 255, 0.214)";
        show1.style.filter = "brightness(0)";
        bool = false;
    }
})

mode.addEventListener("click", () => {
    if (bool === false) {
        radio.style.left = "50%";
        radio.style.animation = "change 5s infinite";
        show2.style.filter = "brightness(1)";
        bool = true;
    } else {
        radio.style.left = "0";
        radio.style.animation = "none";
        show2.style.filter = "brightness(0)";
        bool = false;
    }
})