let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let qtdTentativas = 0;

let verificarBotao = document.getElementById("verificarBotao");
//aqui o nome da variavel é tentativaEntrada
let tentativaEntrada = document.getElementById("tentativa");
let dica = document.getElementById("dica");

verificarBotao.addEventListener("click", function () {

    const tentativa = parseInt(tentativaEntrada.value);

    if (tentativa === numeroSecreto) {
        dica.textContent = "parabéns! você acertou.";
        verificarBotao.disabled = true;
    }
    else if (tentativa < numeroSecreto) {
        //as mensagens estavam todas iguais, alterei
        dica.textContent = "Tente um número maior.";
        //o corretop é qtdTentativas e não gtdTentativas
        qtdTentativas++;
    } else {
        //as mensagens estavam todas iguais, alterei
        dica.textContent = "Tente um número menor.";
        qtdTentativas++;
    }
})