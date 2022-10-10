// Multiplos de 3 e 5

//Criar funççao somar que retorna a
//Soma de todos os múltiplos de 3 e 5


function somar(valor){
    let mult3 = 0
    let mult5 = 0
    for(let i = 1;i <= valor;i++){
       if(i % 3 === 0)
        mult3 += i;
        if(i % 5 === 0)
        mult5 += i 
    };
    console.log(mult3+mult5)
};
somar(10)