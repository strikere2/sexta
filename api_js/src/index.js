const express = require('express');

//Criando um servidor web através do express
const app = express();

//Configurando uma requisição com o método GET para
//a raiz da aplicação
app.get("/", function(request, response){
    console.log("Primeira requisição recebida!");
    response.status(200).json({ message : "Resposta enviada em JSON"});
});


//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma
//informação pela URL da requisição
app.get("/:categoria", (request, response) => {
    console.log(request.params);
})

//EXERCÍCIO - Criar uma nova rota/funcionalidade com método POST para receber uma
//informação pelo corpo do requidito
//POSTMAN, INSOMNIA e RESTCLIENT



//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});