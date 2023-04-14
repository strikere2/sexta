import express, {Request, Response} from "express";
import { Produto } from "./entidades/produto.model";


const app = express();


app.use(express.json());

let produtos : Produto[] = [];
//listar todos os produtos
app.get("/", function(request: Request, response : Response) : Response{
    console.log("Primeira requisição recebida!");
   return response.status(200).json({ message : "Ok", dados : produtos});
});

//buscar produtos por...
app.get("/:categoria/:produto", (request: Request, response : Response) : Response => {
    console.log(request.params.categoria, request.params.produto);
    const { categoria, produto } = request.params;
    return response.status(200).json({categoria, produto});

});
//cadastrar produto 

app.post("/", (request: Request, response : Response) : Response => {
   let produto : Produto = new Produto();

   produto.nome = request.body.nome;
   produto.preco = request.body.preco;

   produtos.push(produto);


    return response.status(201).json
    (
        {message : "Produto cadastrado!", dados : produto}
    );
});

//implementar as funcionalidades no vetor de busca, a alteraçao e remoçao 
//implementar o banco de aplicação (prisma.io)

app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});