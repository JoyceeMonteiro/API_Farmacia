const fs = require('fs');
const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');


server.use(express.json());

server.listen(3000, () =>{
    console.log("Servidor está funcionando!");
});

server.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});




///////////////////////////////////////// 

                         //CLIENTE

server.get('/cliente', (req, res) => {
    return res.json(dados.Cliente);
});


server.post("/cliente",(req, res) => {
    const novoCliente = req.body;

    if(!novoCliente.nome_cliente || !novoCliente.endereco_cliente || !novoCliente.email_cliente|| !novoCliente.telefone_cliente){
return res.status(400).json({mensagem:"Dados incompletos , tente novamente"});
    }
    dados.Cliente.push(novoCliente);
    salvarDados(dados);

    return res.status(201).json({mensagem: "Novo usuário cadastrado"})
})

//insere dados atualizados
server.put('/cliente/:id', (req, res) => {
    const clienteId = parseInt(req.params.id);
    const newCliente = req.body;

    const indiceCliente = dados.Cliente.findIndex(cliente => cliente.id === clienteId);

    if(indiceCliente === -1){
        return res.status(404).json({mensagem: "Cliente não encontrado."})
    }

    dados.Cliente[indiceCliente].nome_cliente = atualizarUser.nome || dados.Cliente[indiceCliente].nome_cliente;
    dados.Cliente[indiceCliente].endereco_cliente = atualizarUser.endereco || dados.Cliente[indiceCliente].endereco_cliente;
    dados.Cliente[indiceCliente].email_cliente = atualizarUser.email || dados.Cliente[indiceUsuario].email_cliente;
    dados.Cliente[indiceCliente].telefone_cliente = atualizarUser.cliente
   

    salvarDados(dados);

    return res.status({mensagem: "Cliente atualizado."})
})

  server.delete('/cliente/:id_cliente', (req, res) => {
    const id_cliente = parseInt(req.params.id_cliente);
    //filtrar os usuarios, removendo pelo id correspondente.
    //u se refere ao usuario.
    dados.Cliente = dados.Cliente.filter(u => u.id_cliente !== id_cliente);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Cliente excluido com sucesso."});
});















////////////////////////////////////////////////// 

                              //MEDICAMENTO

    server.get("/medicamento", (req, res) => {
    return res.json(dados.Medicamento)
})
server.post("/medicamento",(req, res) => {
    const novoMedicamento = req.body;

    if(!novoMedicamento.nome_medicamento || !novoMedicamento.fabricante_medicamento || !novomedicamento.preco_medicamento){
return res.status(400).json({mensagem:"Dados incompletos , tente novamente"});
    }
    dados.Medicamento.push(novoMedicamento);
    return res.status(201).json({mensagem: "Novo medicamento cadastrado"})
})

server.put('/medicamento/:id', (req, res) => {
    const medicamentoId = parseInt(req.params.id);
    const newMedicamento = req.body;

    const indiceMedicamento= dados.Medicamento.findIndex(medicamento => medicamento.id === medicamentoId);

    if(indiceMedicamento === -1){
        return res.status(404).json({mensagem: "Medicamento não encontrado."})
    }

    dados.Medicamento[indiceMedicamento].nome_medicamento = atualizarUser.nome_medicamento || dados.Medicamento[indiceMedicamento].nome_medicamento;
    dados.Medicamento[indiceMedicamento].fabricante_medicamento = atualizarUser.fabricante_medicamento || dados.Medicamento[indiceCliente].fabricante_medicamento;
    dados.Medicamento[indiceMedicamento].preco_medicamento = atualizarUser.preco_medicamento || dados.Medicamento[indiceCliente].preco_medicamento;
    

    salvarDados(dados);

    return res.status({mensagem: "Medicamento atualizado."})
})
    
server.delete('/medicamento/:id_medicamento', (req, res) => {
    const id_medicamento = parseInt(req.params.id_medicamento);

    dados.Medicamento = dados.Medicamento.filter(u => u.id_medicamento !== id_medicamento);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Medicamento excluido com sucesso."});
});




////////////////////////////////////////////////////// 

                        //FORNECEDOR
                        
server.get("/fornecedor", (req, res) => {
    return res.json(dados.Fornecedor)
})

server.post("/fornecedor",(req, res) => {
    const novoFornecedor = req.body;
if(!novoFornecedor.nome_medicamento || !novoFornecedor.endereco_Fornecedor || !novomedicamento.telefone_Fornecedor){
return res.status(400).json({mensagem:"Dados incompletos , tente novamente"});
    }
    dados.Medicamento.push(novoFornecedor);
    return res.status(201).json({mensagem: "Novo fornecedor cadastrado"})
})

server.put('/fornecedor/:id', (req, res) => {
    const fornecedorId = parseInt(req.params.id);
    const newFornecedor = req.body;

    const indiceFornecedor= dados.fornecedor.findIndex(fornecedor => fornecedor.id === fornecedorId);

    if(indiceFornecedor === -1){
        return res.status(404).json({mensagem: "fornecedor não encontrado."})
    }

    dados.Fornecedor[indiceFornecedor].nome_fornecedor = atualizarUser.nome_Fornecedor || dados.fornecedor[indiceFornecedor].nome_Fornecedor;
    dados.Fornecedor[indiceFornecedor].telefone_fornecedor = atualizarUser.telefone_Fornecedor || dados.fornecedor[indiceFornecedor].telefone_Fornecedor;
    dados.Fornecedor[indiceFornecedor].endereco_fornecedor = atualizarUser.endereco_fornecedor || dados.Fornecedor[indiceFornecedor].endereco_fornecedor;
    

    salvarDados(dados);

    return res.status({mensagem: "fornecedor atualizado."})
})
    
server.delete('/fornecedor/:id_fornecedor', (req, res) => {
    const id_fornecedor = parseInt(req.params.id_fornecedor);
    //filtrar os usuarios, removendo pelo id correspondente.
    //u se refere ao usuario.
    dados.Fornecedor = dados.Fornecedor.filter(u => u.id_fornecedor !== id_fornecedor);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Fornecedor excluido com sucesso."});
});


////////////////////////////////// 


                                   //VENDA

server.get("/venda", (req, res) => {
    return res.json(dados.Venda)
})

server.post("/venda",(req, res) => {
    const novaVenda = req.body;
if(!novaVenda.data_venda ){

return res.status(400).json({mensagem:"Dados incompletos , tente novamente"});
    }
    dados.Venda.push(novaVenda);
    return res.status(201).json({mensagem: "Nova venda cadastrada"})
})

server.put('/venda/:id', (req, res) => {
    const vendaId = parseInt(req.params.id);
    const newVenda = req.body;


    const indiceVenda = dados.venda.findIndex(venda => venda.id === vendaId);

    if(indiceVenda === -1){
        return res.status(404).json({mensagem: "Venda não encontrada."})
    }

    dados.Venda[indiceVenda].data_venda = atualizarUser.data_venda ;
    

    salvarDados(dados);

    return res.status({mensagem: "venda atualizado."})
})

    
server.delete('/venda/:id_venda', (req, res) => {
    const id_venda = parseInt(req.params.id_venda);
    //filtrar os usuarios, removendo pelo id correspondente.
    //u se refere ao usuario.
    dados.Venda = dados.Venda.filter(u => u.id_venda !== id_venda);

    salvarDados(dados);
    return res.status(200).json({ mensagem: "Venda excluida com sucesso."});
});





/////////////////////////////////////////////////// 

                           //VENDEDOR

server.get("/vendedor", (req, res) => {
    return res.json(dados.Vendedor)
})
server.post("/vendedor",(req, res) => {
    const novoVendedor = req.body;
     if(!novoVendedor.nome_vendedor || !novoVendedor.endereco_Vendedor || !novoVendedor.telefone_Vendedor){
return res.status(400).json({mensagem:"Dados incompletos , tente novamente"});
}
    dados.Vendedor.push(novoVendedor);
    return res.status(201).json({mensagem: "Novo vendedor cadastrado"})
})

server.put('/vendedor/:id', (req, res) => {
    const vendedorId = parseInt(req.params.id);
    const newVendedor = req.body;

    const indiceVendedor= dados.vendedor.findIndex(vendedor => vendedor.id === vendedorId);

    if(indiceVendedor === -1){
        return res.status(404).json({mensagem: "Vendedor não encontrado."})
    }

    dados.Vendedor[indiceVendedor].nome_vendedor = atualizarUser.nome_vendedor || dados.Vendedor[indiceVendedor].nome_vendedor;
    dados.Vendedor[indiceVendedor].telefone_vendedor = atualizarUser.telefone_vendedor|| dados.Vendedor[indiceVendedor].telefone_vendedor;
    dados.Vendedor[indiceVendedor].endereco_vendedor = atualizarUser.endereco_vendedor || dados.Vendedor[indiceVendedor].endereco_vendedor;
    

    salvarDados(dados);

    return res.status({mensagem: "Vendedor atualizado."})
})

server.delete('/vendedor/:id_vendedor', (req, res) => {
        const id_vendedor = parseInt(req.params.id_vendedor);
        dados.Vendedor = dados.Vendedor.filter(u => u.id_vendedor !== id_vendedor);
    
        salvarDados(dados);
        return res.status(200).json({ mensagem: "Vendedor excluido com sucesso."});
});
    
   
////////////////////////////////////////////////////

                                   //FARMACIA


server.get("/farmacia", (req, res) => {
    return res.json(dados.Farmacia)
})

server.post("/farmacia",(req, res) => {
    const novaFarmacia = req.body;
     
    if(!novaFarmacia.nome_farmacia || !novaFarmacia.endereco_farmacia || !novoVendedor.telefone_farmacia){
      return res.status(400).json({mensagem:"Dados incompletos , tente novamente"});
}
    dados.Vendedor.push(novoVendedor);
    return res.status(201).json({mensagem: "Nova farmacia cadastrado"})
})

server.put('/farmacia/:id', (req, res) => {
    const farmaciaId = parseInt(req.params.id);
    const newFarmacia = req.body;

    const indiceFarmacia= dados.Farmacia.findIndex(farmacia => faramacia.id === faramaciaId);

    if(indiceFarmacia === -1){
        return res.status(404).json({mensagem: "Farmacia não encontrado."})
    }
    dados.Farmacia[indiceFarmacia].nome_farmacia = atualizarUser.nome_farmacia || dados.Farmacia[indiceFarmacia].nome_farmacia;
    dados.Farmacia[indiceFarmacia].endereco_farmacia = atualizarUser.endereco_farmacia|| dados.Farmacia[indiceFarmacia].endereco_farmacia;
    dados.Farmacia[indiceFarmacia].telefone_farmacia = atualizarUser.telefone_farmacia || dados.Farmacia[indiceFarmacia].telefone_farmacia;
    
    salvarDados(dados);
    return res.status({mensagem: "Vendedor atualizado."})
})

    server.delete('/farmacia/:id_farmacia', (req, res) => {
        const id_farmacia = parseInt(req.params.id_farmacia);
        dados.farmacia = dados.Farmacia.filter(u => u.id_farmacia !== id_farmacia);
        
        salvarDados(dados);
        return res.status(200).json({ mensagem: "Farmacia excluida com sucesso."});
});
    

/////////////////////////////////////////////

    function salvarDados(){
        fs.writeFileSync(__dirname +'/src/data/dados.json', JSON.stringify(dados, null, 2));
    }


       
     







