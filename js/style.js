//função login predefinido

let email = ["marcos@fiap.com.br", "marcosvinicius@fiap.com.br", "vitoria@fiap.com", "jonathan@fiap.com", "luan@fiap.com"]
let senhas = ["rm88267", "rm86904", "rm88077", "rm88082", "rm89352"]
let nomes = []

function login() {
    var usuario = document.getElementById("email").value;
    var senha = document.getElementById("idPass").value;

    for (var i in email) {
        if (email[i] == usuario && senhas[i] == senha) {
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
