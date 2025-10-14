const btnPlayPause = document.getElementById("play-pause");
const btnProximoCapitulo = document.getElementById("proximo");
const btnCapituloAnterior = document.getElementById("anterior");
const textoCapitulo = document.getElementById("capitulo");
const audio = document.getElementById("audio-capitulo");
const qtdCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;

btnPlayPause.addEventListener("click", tocarOuPausar);
btnProximoCapitulo.addEventListener("click", proximoCapitulo);
btnCapituloAnterior.addEventListener("click", capituloAnterior);

function tocarFaixa() {
	console.log("Deu play no capitulo!")
  audio.play();
  taTocando = true;
  btnPlayPause.classList.add("tocando");
}

function pausarFaixa() {
	console.log("Deu pause no capitulo!")
  audio.pause();
  taTocando = false;
  btnPlayPause.classList.remove("tocando");
}

function tocarOuPausar() {
  // verifica se ta ou não tocando
  if (taTocando) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function proximoCapitulo() {
  pausarFaixa();
  // verifica se o capitulo atual e menor do que 10 ex cap 1 < 10
  if (capituloAtual < qtdCapitulos) {
    capituloAtual++;
  } else {
    // caso esteja no ultimo capitulo ele volta pro primeiro
    capituloAtual = 1;
  }
	console.log(`foi para o proximo capitulo ${capituloAtual}!`)
  renderizarCapitulo(capituloAtual);
}

function capituloAnterior() {
  pausarFaixa();
  // verifica se esta no primeiro capitulo ele volta pro ultimo ex: cap 1 == 1
  if (capituloAtual == 1) {
    capituloAtual = qtdCapitulos;
  } else {
    // caso não esteja no primeiro capitulo ele volta pro anterior ex cap 10 - 1
    capituloAtual = capituloAtual - 1;
  }
	console.log(`foi para o capitulo anterior ${capituloAtual}!`)
  renderizarCapitulo(capituloAtual);
}

function renderizarCapitulo(capituloAtual) {
	console.log(`Renderizando capitulo ${capituloAtual}!`)
  audio.src = `./src/audios/${capituloAtual}.mp3`;
  textoCapitulo.innerText = `Capítulo ${capituloAtual}`;
}
