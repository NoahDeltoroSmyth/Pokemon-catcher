import { pokemon } from '../Data/pokemon.js';

const pokemonImg1 = document.getElementById('first-pokemon');
const pokemonImg2 = document.getElementById('second-pokemon');
const pokemonImg3 = document.getElementById('third-pokemon');
const button = document.getElementById('select-pokemon');

const generatePokemon = () => {
    let randomPokedex1 = Math.floor(Math.random() * pokemon.length);
    let randomPokedex2 = Math.floor(Math.random() * pokemon.length);
    let randomPokedex3 = Math.floor(Math.random() * pokemon.length);

    while (
        randomPokedex1 === randomPokedex2 ||
      randomPokedex1 === randomPokedex3 ||
      randomPokedex2 === randomPokedex3
    ) {
        randomPokedex1 = Math.floor(Math.random() * pokemon.length);
        randomPokedex2 = Math.floor(Math.random() * pokemon.length);
        randomPokedex3 = Math.floor(Math.random() * pokemon.length);
    }
    
    let pokemon1 = pokemon[randomPokedex1];
    pokemonImg1.src = pokemon1.url_image;

    let pokemon2 = pokemon[randomPokedex2];
    pokemonImg2.src = pokemon2.url_image;

    let pokemon3 = pokemon[randomPokedex3];
    pokemonImg3.src = pokemon3.url_image;
};


button.addEventListener('click', ()=> {
    generatePokemon();
});
