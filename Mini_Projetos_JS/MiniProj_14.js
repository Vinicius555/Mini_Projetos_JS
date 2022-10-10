//Constructor Function
//Criar um objeto postagem
//titulo,mensagem,autor,visualização,comentarios,estaAoVivo

function postagem (titulo,mensagem,autor,visualização,comentarios
,estaAoVivo){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualização = 0,
    this.comentarios = [] ,
    this.estaAoVivo = false
}

let novaPostagem = new postagem('a','b','c',80,'d',true)
console.log(novaPostagem);