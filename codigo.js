const escolhas = ["pedra", "papel", "tesoura"];
const resultadoJogador = document.getElementById("resultadoJogador");
const resultadoComputador = document.getElementById("resultadoComputador");
const resultadoJogo = document.getElementById("resultadoJogo");

function jogar(escolhasJogador){

    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];
    let resultado = ""

    if(escolhasJogador === escolhaComputador){
        resultado = "EMPATE!"
    }else{
        switch(escolhasJogador){
            case 'pedra':
               resultado = (escolhaComputador === 'tesoura') ? 'VOCÊ VENCEU!' : 'VOCÊ PERDEU!';
                break
            case 'papel':
               resultado = (escolhaComputador === 'pedra') ? 'VOCÊ VENCEU!' : 'VOCÊ PERDEU!';
                break
            case 'tesoura':
               resultado = (escolhaComputador === 'papel') ? 'VOCÊ VENCEU!' : 'VOCÊ PERDEU!';
                break
             }
    }

    resultadoJogador.textContent = `JOGADOR: ${escolhasJogador}`;
    resultadoComputador.textContent = `COMPUTADOR: ${escolhaComputador}`;
    resultadoJogo.textContent = resultado;

    resultadoJogo.classList.remove("textoverde", "textovermelho");

    switch(resultado){
        case 'VOCÊ VENCEU!':
            resultadoJogo.classList.add("textoverde");
            break;
        case 'VOCÊ PERDEU!':
            resultadoJogo.classList.add("textovermelho");
            break;
    }

}

function reiniciar(){
    resultadoJogador.textContent = "JOGADOR: "
    resultadoComputador.textContent = "COMPUTADOR: "
    resultadoJogo.textContent = ""

    resultadoJogo.classList.remove("textoverde", "textovermelho")
}
