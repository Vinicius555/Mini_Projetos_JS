// PAR ou ÍMPAR

// Receber um quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar

function ParOuImpar(quant){
    for(let i = 1;i <= quant;i++){
        if(i % 2 === 0)
            console.log(i,'PAR!')
        else{
            console.log(i,'ÍMPAR!')
        };

    };
    
};

ParOuImpar(10);
