const http = require('http'); //fazendo referencia a biblioteca http.

const hostname = '127.0.0.1'; // ou 'localhost'
const port = 3000;

const server = http.createServer((req, res) => {//lib http sendo utilizada com o método createServer (para criar um novo servidor de requisição)
    
    if(req.url == "/" && req.method == 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Olá, Mundo!');
    }else if(req.url == "/sobre" && req.method == 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Sobre!');
    }else if(req.url == "/deletar" && req.method == 'DELETE'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Deletado com sucesso!');
    }else if(req.url =="/contato" && req.method == "GET"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Contato');
    }

});

server.listen(port, hostname, () => {//servidor escutando no ip e porta determinados acima.
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

//HTTP METHODS (metodos HTTP)
//GET: Buscar informações
//POST: Criar informações
//PUT: Atualizar informações
//DELETE: Deletar informações