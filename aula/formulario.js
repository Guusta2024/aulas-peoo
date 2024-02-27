function submeter() {
    let confirmar = confirm("Você confirmar esse ação?");
    if (confirmar == true) {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        document.getElementById("resultado").innerHTML = 
            "<h3> Informações Recebidas</h3>" +
            "<p>Nome: " + nome + "</p>" +
            "<p>E-mail: "+ email + "</p>";
    }
    else{
        document.getElementById("resultado").innerHTML =
        "<h2> Ação cancelada </h2>";

    }
}