const bens = require("../bens.json")

function autoIncrement(){
    const ultimoId = Number(bens[bens.length - 1].id)
    return ultimoId + 1;
}

//CRUDS
const create= (req, res)=>{
    const dados = read.body
    dados.id = autoIncrement()
    bens.add(dados)
    res.status(201).json(dados)
}

const read = (req, res)=>{
    res.json(bens)
}