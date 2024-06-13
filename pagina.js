const body = document.querySelector("body");

body.style.margin = "0";
body.style.padding = "0";
body.style.backgroundColor = "black";
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = `flex`;
body.style.justifyContent = `center`


const nav = document.createElement(`nav`);

nav.style.backgroundColor = `white`;
nav.style.width = "100%";
nav.style.height = "50px";


body.appendChild(nav);

const div = document.createElement(`div`);

div.style.background = `red`;
div.style.width = `200px`;
div.style.height = `50px`;
div.style.color = `white`;
div.textContent = "alo teste";
div.style.display = `flex`;
div.style.alignItems = `center`
div.style.justifyContent = `center`;

nav.appendChild(div);




