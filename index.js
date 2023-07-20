const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');

server.get("/cliente", (req, res) => {
    return res.json(dados.Cliente)
})


server.get("/medicamento", (req, res) => {
    return res.json(dados.Medicamento)
})


server.get("/fornecedor", (req, res) => {
    return res.json(dados.Fornecedor)
})


server.get("/venda", (req, res) => {
    return res.json(dados.Venda)
})


server.get("/vendedor", (req, res) => {
    return res.json(dados.Vendedor)
})


server.get("/farmacia", (req, res) => {
    return res.json(dados.Farmacia)
})


server.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});
server.listen(3000, () =>{
    console.log("Servidor está funcionando!");
});