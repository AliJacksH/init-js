let n1 = document.querySelector("#texto")
let n2 = document.querySelector("#texto2")
let resultado = document.querySelector("#resultado")

function somar() {
    let numeron1 = Number(n1.value)
    let numeron2 = Number(n2.value)
    let soma = numeron1 + numeron2
    resultado.innerHTML = `A soma entre os valores é <strong>${soma}</strong>`
}

