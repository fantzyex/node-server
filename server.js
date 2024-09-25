const http = require('http'); //fazendo referencia a biblioteca http.

const hostname = '127.0.0.1'; // ou 'localhost'
const port = 3000;

const server = http.createServer((req, res) => {//lib http sendo utilizada com o método createServer (para criar um novo servidor de requisição)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Olá, Mundo!\n');
});

server.listen(port, hostname, () => {//servidor escutando no ip e porta determinados acima.
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});