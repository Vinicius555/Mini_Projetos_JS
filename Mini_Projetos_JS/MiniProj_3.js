function fizBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um Número';
    else if (entrada % 3 === 0)
        return 'Fizz';
    else if (entrada % 5 === 0)
        return 'Buzz';
    else if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    return entrada

};

const resultado = fizBuzz(20);
console.log(resultado);


/* Faltou identação: https://www.youtube.com/watch?v=FR0HZiRsiQI*/