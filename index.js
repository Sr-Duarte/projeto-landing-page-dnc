var setadireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolaParaDiteira() {
    leonardo.style ="display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"

}

function RolaParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"

}