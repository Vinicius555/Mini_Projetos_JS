// Contador de Asteríscos
// Criar uma Função que exiba a quantidade de *
//que aquela linha possui

function exibirAsteriscos(linhas){
    let ast = '';
    for(let i = 1; i <= linhas;i++){
        ast += '*';
        console.log(ast);
    };
};
exibirAsteriscos(10);