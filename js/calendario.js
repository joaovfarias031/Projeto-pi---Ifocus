function desenharCalendario() {

    const dataAtual = new Date()
    const diaAtual = dataAtual.getDate()
    const mesAtual = dataAtual.getMonth()
    const anoAtual = dataAtual.getFullYear()
    const diaSemanaAtual = dataAtual.getDay()

    const diasNoMes = new Date(anoAtual, mesAtual + 1 , 0)
    const ultimoDiaMes = diasNoMes.getDate()
    const primeiroDiaMes = new Date(anoAtual, mesAtual, 1)
    const diaSemanaPrim_DiaMes = primeiroDiaMes.getDay()

    const celulas = document.querySelectorAll("td.coluna-calendario")
    let posicao = diaSemanaPrim_DiaMes
    for (let dia = 1; dia <= ultimoDiaMes; dia++) {
        celulas[posicao].textContent = dia;
        posicao += 1

    }
}

