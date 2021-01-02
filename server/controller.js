const axios = require('axios');

let tops = [],
    bottoms = [],
    shoes = [],
    hats = [],
    id = 1;

module.exports = {
    addItem: (req,res) => {
        // res.status(200).send(caughtPokemon);
    },
    postItem: (req,res) => {
        // const {pokemon} = req.body;
        // pokemon.id = id;
        // id++;
        // caughtPokemon.push(pokemon);
        // res.status(200).send(caughtPokemon);
    },
    editSize: (req,res) => {
        // const {id} = req.params,
        //       {name} = req.body;
        // const pokemon = caughtPokemon.find(element => element.id === +id);
        // pokemon.name = name;
        // res.status(200).send(caughtPokemon);
    },
    removeFromCart: (req,res) => {
        // const {id} = req.params;
        // const index = caughtPokemon.findIndex(element => element.id === +id);
        // caughtPokemon.splice(index, 1);
        // res.status(200).send(caughtPokemon)
    }
}