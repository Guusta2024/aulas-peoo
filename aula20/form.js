function mandar(field) {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    document.getElementById("resultado").innerHTML = 
        "<h3> Informações Recebidas</h3>" +
        "<p>Nome: " + nome + "</p>" +
        "<p>E-mail: "+ email + "</p>";

}
