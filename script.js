const here = document.getElementById("puzzel");
const control = document.getElementById("set");
const count = document.getElementById("count");
const range = document.getElementById("input");
const submitBTN =document.getElementById("submit");
const setSEC = document.getElementById("set");
const puzzelSEC = document.getElementById("puzzel");

count.textContent = range.value;

range.addEventListener("input", () => {
    count.textContent = range.value;
    console.log(range.value);
});

submitBTN.addEventListener("click", () => {
    if(count != "") {
        setSEC.classList.toggle("hide");
        puzzelSEC.classList.toggle("hide");
        populate();
    }
});

function populate() {
    for(let i=0; i<LIST; i++) {
        const fig = document.createElement('figure');
            const img = document.getElementById('img');
            fig.appendChild(img);
        here.appendChild(fig);
    }
}