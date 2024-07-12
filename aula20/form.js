function mandar(field) {
    let senha = document.getElementById("senha").value;
    let csenha = document.getElementById("csenha").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    if (csenha == senha){
    document.getElementById("resultado").innerHTML = 
        `<h3> Informações Recebidas</h3>
        <p>Nome: ${nome}</p>
        <p>E-mail: ${email}</p>
        <p>senha: ${senha} é valida </p>`
    }else{
        alert("senha invalida")
    }

}
