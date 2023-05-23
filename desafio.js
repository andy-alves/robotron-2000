var livros = {
    titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco: 31.92,
    chamaLivro: function() {
        return this.autor;
    }
}
console.log('O autor do livro se chama ' + livros.chamaLivro())