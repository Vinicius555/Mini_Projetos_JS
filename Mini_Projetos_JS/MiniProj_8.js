// Média escolar
//Obter a média a partir de um array


// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90 - 100: A

const array = [100,100,100];

console.log(mediaAluno(array));

function mediaAluno(notas){
    const media = calcularMedia(notas);
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A'
}


function calcularMedia(array){
    let somaMedia = 0;
    for (let valor of array){
        somaMedia += valor;
    }
    return somaMedia/(array.length);
}

