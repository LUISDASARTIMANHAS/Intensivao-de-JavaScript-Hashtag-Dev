const imgVisualizacao = document.querySelector("#visualizacao img");
const titulo = document.querySelector("h1");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");
const imgMiniatura0 = document.querySelector("[for='0-imagem'] img");
const imgMiniatura1 = document.querySelector("[for='1-imagem'] img");
const imgMiniatura2 = document.querySelector("[for='2-imagem'] img");
const opcoesTam = ["41 mm", "45 mm"];
const opcoesCores = [
  "verde-cipreste",
  "azul-inverno",
  "meia-noite",
  "estelar",
  "rosa-claro",
];

let numImgSelecionada = 1;
let numTamSelecionada = 0;
let numCorSelecionada = 1;

function atualizarCorSelecionada() {
  const opcCorSelecionada = document
    .querySelector("[name='opcao-cor']:checked")
    .id.charAt(0);

  numCorSelecionada = opcCorSelecionada;

  atualizarTitulo();

  atualizarImgSelecionada();
}

function atualizarTamanho() {
  // 0 ou 1
  const opcTamSelecionado = document
    .querySelector("[name='opcao-tamanho']:checked")
    .id.charAt(0);
  numTamSelecionada = opcTamSelecionado;
  const tamCaixa = opcoesTam[numTamSelecionada];

  atualizarTitulo();

  if (tamCaixa == "41 mm") {
    imgVisualizacao.classList.add("caixa-pequena");
  } else {
    imgVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImgSelecionada() {
  const opcImgSelecionada = document
    .querySelector("[name='opcao-imagem']:checked")
    .id.charAt(0);
  const nomeCor = opcoesCores[numCorSelecionada];

  numImgSelecionada = opcImgSelecionada;
  imgVisualizacao.src = `./src/imagens/opcoes-cores/imagens-${nomeCor}/imagem-${numImgSelecionada}.jpeg`;
	imgMiniatura0.src = `./src/imagens/opcoes-cores/imagens-${nomeCor}/imagem-0.jpeg`
	imgMiniatura1.src = `./src/imagens/opcoes-cores/imagens-${nomeCor}/imagem-1.jpeg`
	imgMiniatura2.src = `./src/imagens/opcoes-cores/imagens-${nomeCor}/imagem-2.jpeg`
}

function atualizarTitulo() {
  const nomeCor = opcoesCores[numCorSelecionada];
  const tamCaixa = opcoesTam[numTamSelecionada];
  titulo.innerText = `Pulseira loop esportiva ${nomeCor.toLocaleLowerCase()} para caixa de ${tamCaixa}`;
}
