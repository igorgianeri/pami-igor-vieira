var livroPerso = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954
};
function exibirLivro(livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo));
    console.log("Autor: ".concat(livro.autor));
    console.log("Ano de Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
}
exibirLivro(livroPerso);
