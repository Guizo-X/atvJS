const body = document.querySelector("body");
body.style.margin = "0";
body.style.padding = "0";
body.style.backgroundColor = "white";
body.style.width = "100vw";
body.style.height = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "space-between";

const nav = document.createElement("nav");
nav.style.backgroundColor = "blue";
nav.style.width = "100%";
nav.style.height = "50px";
nav.style.display = "flex";
nav.style.justifyContent = "flex-end";
nav.style.gap = "45px";
nav.style.alignItems = "center";

body.appendChild(nav);

const reset = document.createElement("div");
reset.textContent = "Reset";
reset.style.color = "white";
reset.style.cursor = "pointer";


nav.appendChild(reset);

const git = document.createElement("div");
git.textContent = "Git";
git.style.color = "white";
git.style.cursor = "pointer";
git.style.paddingRight = "35px";


nav.appendChild(git);

const container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

body.appendChild(container);

const img = new Image();
img.src = "./assets/Faxina-logo.png"; 
img.alt = "logo app";
img.style.width = "200px"; 
img.style.height = "200px"; 

container.appendChild(img);



const centro = document.createElement("div");
centro.style.display = "flex";
centro.style.flexDirection = "column";
centro.style.alignItems = "center";
centro.style.justifyContent = "center";
centro.style.width = "100%";
centro.style.marginBottom = "70px";

body.appendChild(centro);

const caixaDeInputs = document.createElement("div");
caixaDeInputs.style.display = "flex";
caixaDeInputs.style.flexDirection = "column";
caixaDeInputs.style.alignItems = "center";

centro.appendChild(caixaDeInputs);

const inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";
inputNome.style.textAlign = "center";
inputNome.style.margin = "15px";
inputNome.style.width = "300px"
inputNome.style.height = "35px"


caixaDeInputs.appendChild(inputNome);

const inputNota1 = document.createElement("input");
inputNota1.type = "number";
inputNota1.placeholder = "Digite a primeira nota";
inputNota1.style.textAlign = "center"; 
inputNota1.style.margin = "15px"; 
inputNota1.style.width = "300px"; 
inputNota1.style.height = "35px"; 

caixaDeInputs.appendChild(inputNota1);

const inputNota2 = document.createElement("input");
inputNota2.type = "number";
inputNota2.placeholder = "Digite a segunda nota";
inputNota2.style.textAlign = "center";
inputNota2.style.margin = "15px";
inputNota2.style.width = "300px";
inputNota2.style.height = "35px";

caixaDeInputs.appendChild(inputNota2);

const inputNota3 = document.createElement("input");
inputNota3.type = "number";
inputNota3.placeholder = "Digite a terceira nota";
inputNota3.style.textAlign = "center";
inputNota3.style.margin = "15px";
inputNota3.style.width = "300px";
inputNota3.style.height = "35px";

caixaDeInputs.appendChild(inputNota3);

const btnCalcular = document.createElement("button");
btnCalcular.textContent = "Calcular Média";
btnCalcular.style.padding = "10px";
btnCalcular.style.marginTop = "20px";
btnCalcular.style.backgroundColor = "green";
btnCalcular.style.color = "white";
btnCalcular.style.border = "none";
btnCalcular.style.cursor = "pointer";

btnCalcular.addEventListener("click", calcularMedia);

caixaDeInputs.appendChild(btnCalcular);

const resultadoMedia = document.createElement("div");
resultadoMedia.style.marginTop = "20px";
resultadoMedia.style.color = "black";

centro.appendChild(resultadoMedia);

function calcularMedia() {
  const nome = inputNome.value;
  const nota1 = parseFloat(inputNota1.value);
  const nota2 = parseFloat(inputNota2.value);
  const nota3 = parseFloat(inputNota3.value);

  const media = (nota1 + nota2 + nota3) / 3;

  if (media < 3) {
    resultadoMedia.textContent = `aluno ${nome}, sua média é: ${media.toFixed(2)}. Você foi reprovado.`;
    }

    else if (media >= 3 && media < 6) {
    resultadoMedia.textContent = `aluno ${nome}, sua média é: ${media.toFixed(2)}. Você está de recuperação.`;
    }

    else {
    resultadoMedia.textContent = `aluno ${nome}, sua média é: ${media.toFixed(2)}. Você passou, parabéns!`;
    }

}

const footer = document.createElement("footer");
footer.style.backgroundColor = "blue";
footer.style.width = "100%";
footer.style.height = "50px";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";
footer.style.color = "white";
footer.textContent = "me da 8 professor 😭";
footer.style.fontSize = "20px"

body.appendChild(footer);

