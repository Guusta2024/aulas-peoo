

function sub(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    document.getElementById("resultado").innerHTML = 
        `<p>seu nome completo: <br> ${nome} ${sobrenome}` 
    
    }