function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas= doument.querySelectoeAll(".tecla");

let contador=0;
while (coontador<listaDeTeclas.length){
    const efeito=listaDeTeclas[contador].classList[1];
    const idAudio='#som_'+efeito;
    listaDeTeclas[contador].onclick=function(){
        tocaSom(idAudio);
    }
    contador= contador+1;
    console.log(contado);
}