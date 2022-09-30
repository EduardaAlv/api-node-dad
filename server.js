const express = require('express');
const app = express();

const dados= {
    listaLoja: [
        {id: 1, descricao: "Kit Marcadores de Texto", preco: 12.00},
        {id: 2, descricao: "Kit Canetas", preco: 12.00},
        {id: 3, descricao: "Agenda", preco: 12.00},
        {id: 4, descricao: "Caderno", preco: 18.00},
        {id: 5, descricao: "Caderno", preco: 19.00},
        {id: 6, descricao: "Apontador", preco: 11.00},
        {id: 7, descricao: "Planner", preco: 11.00},
        {id: 8, descricao: "Bloco de anotações", preco: 15.00}

    ]
}
app.get ('/api/produtos', (req, res) => {
    res.status(200).json(dados)
})

app.get ('/api/produtos/:id', (req, res) => {
    let id = parseInt (req.params.id)
    let idx = dados.listaLoja.findIndex((elem) => elem.id === id) 
    if(idx > -1){
        res.status(200).json(dados.listaLoja[idx])
    }
    else{
        res.status(404).json({ message: "produto não encontrado."})
    }
})

let port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log('Listening on port 3000');
});