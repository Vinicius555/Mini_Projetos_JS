// Medidor de velocidade

// Velocidade Máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// caso pontos maior que 12 -> "Carteira Supensa"

function verificarVelocidade(velocidade){
   const velMax = 70;
   const kmPorPonto = 5;
   if(velocidade <= velMax)
    console.log('OK!');
    else{
        const pontos = Math.floor(((velocidade- velMax) / kmPorPonto));
        if(pontos >= 12)
            console.log("Carteira Suspensa");
        else
            console.log("pontos:",pontos);
    };
   
};

verificarVelocidade(83);
