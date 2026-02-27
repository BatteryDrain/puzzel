const here = document.getElementById("puzzel");
const control = document.getElementById("set");
const count = document.getElementById("count");
const range = document.getElementById("input");
const submitBTN =document.getElementById("submit");
const setSEC = document.getElementById("set");
const puzzelSEC = document.getElementById("puzzel");

count.textContent = range.value;

const TILESIZE = 52;
const cols = Math.floor(window.innerWidth/52);

let LIST = [];

// setSEC.seyle.width = window.innerWidth + "px";
// setSEC.style.width = document.documentElement.innerWidth + "px";


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
    for (let i = 0; i < range.value; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        LIST.push([col, row]);
    }
    console.log(LIST);
});

function populate() {

    for (let i = 0; i < range.value; i++) {

        const fig = document.createElement('figure');
        fig.id = "tile" + i;
        fig.draggable = "true";
            const foto = document.createElement('img');
            foto.src = "assets/cat.webp";

            const col = i % cols;
            const row = Math.floor(i / cols);

            foto.style.left = `${-col * TILESIZE}px`;
            foto.style.top  = `${-row * TILESIZE}px`;

            fig.appendChild(foto);
        here.appendChild(fig);
    }
}
