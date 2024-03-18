function calcular() {
    let dataNascimento = new  Date(document.querySelector("#data"))
    let diaNascimento = dataNascimento.getDate();
    let mesNascimento = dataNascimento.getMonth();
    let anoNascimento = dataNascimento.getFullYear();

    let hoje = new Date();
    let diaAtual = hoje.getDate()
    let mesAtual = hoje.getMonth()
}