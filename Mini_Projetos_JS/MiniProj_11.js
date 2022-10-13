/* 
Objeto Endereço
Criar um objeto endereço que contem:
Rua
Cidade
CEP
exibirEndereço(endereco)
*/

let endereco = {
    Rua: 'Professor Machado Lira',
    cidade: 'Natal',
    Cep:'56170-516'

};

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave,endereco[chave]);
    }
}

console.log(endereco)