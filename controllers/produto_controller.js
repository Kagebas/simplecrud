const Produto = require('../models/produto.js');



exports.get = (req, res) => {
    Produto.find()
                .then(Produto => {
                    res.send(Produto);
                }).catch(err => {
                    
                    res.status(500).send({err, message: "algo deu errado"});
                });
},

exports.create = (req, res) => {
    var produtoNovo = new Produto();

    produtoNovo.nome = req.body.nome;
    produtoNovo.preco = req.body.preco;
    produtoNovo.descricao = req.body.descricao;

    produtoNovo.save(function(err) {
        if(err)
            res.send('Apresentou um erro durante a inclusão do produto' + err);
        res.json({message: 'Produto inserido com sucesso'});
    });


},

exports.update = (req, res) => {
    Produto.findOneAndUpdate(Produto.id, {
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao

    }).then(() =>{
        if(true) {
            return res.json({message: 'Produto alterado alterado com sucesso'}), {new: true}
        }
    

    }).catch(error =>{
        console.log(error)
        return error
    })
    
},
exports.delete = (req, res) => {
    Produto.findOneAndRemove(Produto.id)
        .then(()=> {
            return res.json({message: 'Produto excluído com sucesso'})
        }).catch(err =>{
            return res.send('Não foi possivel excluir este produto devido ao erro '+ err);
        })
}




