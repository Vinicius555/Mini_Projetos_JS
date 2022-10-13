function VerificarEntrada(){
    Nomeconvidado = document.getElementById('nome').value;
    ConvidadosVinicius = ['Gabriel','Guiulherme','Silva']
    if(ConvidadosVinicius.includes(Nomeconvidado)){
        document.getElementById('PermissaoDeEntrada').innerHTML=
        'Você Esta Autorizado a Entrar!!'
    }
    else{
        document.getElementById('PermissaoDeEntrada').innerHTML=
        'Você Não Está Autorizado a Entrar!!'
    }
}