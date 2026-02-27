const here = document.getElementById("puzzel");
const control = document.getElementById("set");

function populate() {
    for(let i=0; i<LIST; i++) {
        document.createElement('fig');

        here.appendChild(fig);
    }
}