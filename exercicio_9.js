const mensagensDivertidas = 
[
    "por que os fantasmas são pessimos em contar mentiras? Porque são transparentes.",

    "Por que a plantinha não foi atendida no hospital? Porque só tinha médico de plantão.",

    "Porque é que o Hitler se suicidou? Porque viu a conta do gás.",

    "O que a Lua disse ao Sol? Nossa, você é tão grande e ainda não te deixam sair à noite!"
]   

let botaoDivertido = document.getElementById("botaoDivertido")
let mensagemDivertida = document.getElementById("mensagemDivertida")

botaoDivertido.addEventListener('click', function(){
    //Math.floor(x) retorna o menor número inteiro dentre o número "x"
    //Math.random() retorna um número pseudo-aleatório no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length) ]

    mensagemDivertida.textContent = mensagemAleatoria;
} )