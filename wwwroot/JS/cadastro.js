document.getElementById("formCadastro").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);

    alert("Formulário enviado com sucesso!");
});