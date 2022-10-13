/*Números Primos */

exibitNumeroPrimos(15);

function exibitNumeroPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (DivisorNumeroPrimo(numero)) console.log(numero);
    };
};
function DivisorNumeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;

        }

    };
    return true;
};