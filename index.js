const express = require('express');
const petshop = require('./petshop')

const app = express();

app.use(express.json());


app.get('/pets', (req, res) => {

    return res.send(petshop.listarPets());       
    
}),

app.post('/pets', (req, res) => {

    const pet = req.body
    
    return res.json(petshop.adicionarPet(pet))
});

app.listen(3000, () => {


    console.log('servidor rodando!');
});

//console.log(petshop.listarPets());

