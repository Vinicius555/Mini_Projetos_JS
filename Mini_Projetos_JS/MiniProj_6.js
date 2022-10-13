/*
Encontre o String:
 Criar um método para ler propriedade de um objeto  
 Exibir somente as propriedade do tipo string que estão nesse objeto.
*/
function TipoString(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])

};

const filme = {
    titulo: 'Vingadores',
    ano: 2012,
    diretor: 'Joe Russo',
};

TipoString(filme);

/* tente utilizar arrow functions para sugar sintaxe: https://www.youtube.com/watch?v=dYHhT6suggE*/