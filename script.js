const here = document.getElementById("puzzel");
const control = document.getElementById("set");
const count = document.getElementById("count");
const range = document.getElementById("input");
const submitBTN =document.getElementById("submit");
const setSEC = document.getElementById("set");
const puzzelSEC = document.getElementById("puzzel");


range.addEventListener("input", () => {
    count.textContent = range.value;
    console.log(range.value);
});

submitBTN.addEventListener("click", () => {
    setSEC.classList.toggle("hide");
    puzzelSEC.classList.toggle("hide");
});


function populate() {
    for(let i=0; i<LIST; i++) {
        const fig = document.createElement('fig');

        here.appendChild(fig);
    }
}