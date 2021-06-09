//função login pré definido//

let email = ["marcos@fiap.com.br", "marcosvinicius@fiap.com.br", "vitoria@fiap.com", "jonathan@fiap.com", "luan@fiap.com"]
let senhas = ["rm88267", "rm86904", "rm88077", "rm88082", "rm89352"]

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
};
//função de direcionamento para avaliar//
function avaliar() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJ0RGdBvFZzpQRQeWcrwlhk8s")
};

function avaliar1() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJN5-5AyJbzpQRvFLy1MhRJOA")
};

function avaliar2() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJP1UFZxhXzpQRZM5i7c1Dx14")
};

function avaliar3() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJXTuoaDpYzpQRjUwBYgaWWD8")
};

function avaliar4() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJe2dSRJRbzpQRSjMA8vvCytg")
};

function avaliar5() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJwWmPS3NKzJQRMdZYpziZiBE")
};

function avaliar6() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJpUToQOFZzpQR44DnWaMFgO4")
};

function avaliar7() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJ9e0c7IBZzpQRt0BdDRjIZ_U")
};

function avaliar8() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJZ_yXOAVYzpQRI3IRPmdtesc")
};

function avaliar9() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJ_cAlxwz4zpQRFm_3LpNfVn0")
};

function avaliar10() {
    window.open("https://search.google.com/local/writereview?placeid=ChIJ15-r_QJYzpQRiei5zjngGY8")
};