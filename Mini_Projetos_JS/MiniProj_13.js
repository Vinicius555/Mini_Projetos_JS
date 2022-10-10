// Objeto Postagem de Blog
// Eu quero que você crie neste exercício um objeto de postagem de blog que vai 
// Conter as seguintes propriedades
// postagem
/*
titulo
mensagem
autor
vizualiações
comentarios
    (autor,mensagem)
estaAoVivo
*/


let postagem = {
    titulo: 'Novo Post',
    mensagem: 'Desistir e para os fracos',
    autor:'Desconhecido',
    visualizacoes: 7,
    comentario : [
        {autor:'Sócrates',mensagem:'Só sei que nada sei'},
        {autor:'Aristóteles',mensagem:'A esperança é o sonho do homem acordado.'}
    ],
    estaAoVivo : true
}

console.log(postagem);
