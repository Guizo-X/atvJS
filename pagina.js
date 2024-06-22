const body = document.querySelector("body");
body.style.backgroundColor = "white";
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "space-between";
body.style.margin = "0";
body.style.padding = "0";
body.style.position = "relative";
body.style.overflow = "hidden";

const nav = document.createElement("nav");
nav.style.backgroundColor = "blue";
nav.style.width = "100%";
nav.style.height = "10vh";
nav.style.display = "flex";
nav.style.justifyContent = "flex-end";
nav.style.gap = "45px";
nav.style.alignItems = "center";

body.appendChild(nav);

const reset = document.createElement("div");
reset.textContent = "Reset";
reset.style.color = "white";
reset.style.cursor = "pointer";
reset.style.position = "relative"

reset.addEventListener("click", () => location.reload());

nav.appendChild(reset);

const git = document.createElement("div");
git.textContent = "Git";
git.style.color = "white";
git.style.cursor = "pointer";
git.style.paddingRight = "35px";

git.addEventListener("click", () => {
  window.open("https://github.com/Guizo-X/atvJS.git", "_blank");
});


nav.appendChild(git);

const centro = document.createElement("div");
centro.style.display = "flex";
centro.style.flexDirection = "column";
centro.style.alignItems = "center";
centro.style.justifyContent = "center";
centro.style.width = "100%";
centro.style.height = "70vh"
centro.style.flex = "1"; 
centro.style.marginBottom = "10vh"; 

body.appendChild(centro);

const img = new Image();
img.src = "./assets/Faxina-logo.png"; 
img.alt = "logo app";
img.style.width = "15vw"; 
img.style.height = "20vh"; 
img.style.marginTop = "50px"


centro.appendChild(img);

const caixaDeInputs = document.createElement("div");
caixaDeInputs.style.display = "flex";
caixaDeInputs.style.flexDirection = "column";
caixaDeInputs.style.alignItems = "center";
caixaDeInputs.style.width = "100%"; 
caixaDeInputs.style.padding = "0 20px"; 

centro.appendChild(caixaDeInputs);

const inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";
inputNome.style.textAlign = "center";
inputNome.style.margin = "10px";
inputNome.style.width = "100%"; 
inputNome.style.height = "25px";
inputNome.style.maxWidth = "300px"; 

caixaDeInputs.appendChild(inputNome);

const inputNota1 = document.createElement("input");
inputNota1.type = "number";
inputNota1.placeholder = "Digite a primeira nota";
inputNota1.style.textAlign = "center"; 
inputNota1.style.margin = "10px"; 
inputNota1.style.width = "100%"; 
inputNota1.style.height = "25px"; 
inputNota1.style.maxWidth = "300px"; 
caixaDeInputs.appendChild(inputNota1);

const inputNota2 = document.createElement("input");
inputNota2.type = "number";
inputNota2.placeholder = "Digite a segunda nota";
inputNota2.style.textAlign = "center";
inputNota2.style.margin = "10px";
inputNota2.style.width = "100%"; 
inputNota2.style.height = "25px";
inputNota2.style.maxWidth = "300px"; 

caixaDeInputs.appendChild(inputNota2);

const inputNota3 = document.createElement("input");
inputNota3.type = "number";
inputNota3.placeholder = "Digite a terceira nota";
inputNota3.style.textAlign = "center";
inputNota3.style.margin = "10px";
inputNota3.style.width = "100%"; 
inputNota3.style.height = "25px";
inputNota3.style.maxWidth = "300px";

caixaDeInputs.appendChild(inputNota3);

const btnCalcular = document.createElement("button");
btnCalcular.textContent = "Calcular Média";
btnCalcular.style.padding = "10px";
btnCalcular.style.marginTop = "15px";
btnCalcular.style.backgroundColor = "green";
btnCalcular.style.color = "white";
btnCalcular.style.border = "none";
btnCalcular.style.cursor = "pointer";
btnCalcular.style.width = "100%"; 
btnCalcular.style.maxWidth = "300px"; 

btnCalcular.addEventListener("click", calcularMedia);

caixaDeInputs.appendChild(btnCalcular);

const resultadoMedia = document.createElement("div");
resultadoMedia.style.marginTop = "20px";
resultadoMedia.style.fontSize = "25px";
resultadoMedia.style.textAlign = "center";
centro.appendChild(resultadoMedia);

function calcularMedia() {
  const nome = inputNome.value;
  const nota1 = parseFloat(inputNota1.value);
  const nota2 = parseFloat(inputNota2.value);
  const nota3 = parseFloat(inputNota3.value);

  const media = (nota1 + nota2 + nota3) / 3;

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    resultadoMedia.textContent = "Erro: Por favor, insira as três notas";
    resultadoMedia.style.color = "red";
    return;
  }

  resultadoMedia.style.color = "black";

  if (media < 3) {
    resultadoMedia.textContent = `${nome} sua média é: ${media.toFixed(1)}, Você foi reprovado.`;
  } else if (media >= 3 && media < 6) {
    resultadoMedia.textContent = `${nome} sua média é: ${media.toFixed(1)}, Você está de recuperação.`;
  } else {
    resultadoMedia.textContent = `${nome} sua média é: ${media.toFixed(1)}, Você passou, parabéns!`;
  }
}

const footer = document.createElement("footer");
footer.style.backgroundColor = "blue";
footer.style.width = "100%";
footer.style.height = "10vh";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";
footer.style.color = "white";
body.appendChild(footer);

const linkFF = document.createElement("a");
linkFF.textContent = "Conheça faxina facil!";
linkFF.href = "https://github.com/Guizo-X/FaxinaFacil";
linkFF.target = "_blank";
linkFF.style.fontSize = "20px";
linkFF.style.color = "white";
linkFF.style.textDecoration = "none";
linkFF.style.marginTop = "10px";

footer.appendChild(linkFF);

