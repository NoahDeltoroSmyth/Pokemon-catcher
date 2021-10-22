import { pokemon } from '../Data/pokemon.js';
import { encounterPokemon, capturePokemon } from '../Functions/utils.js';

const pokemonImg1 = document.getElementById('first-pokemon');
const pokemonImg2 = document.getElementById('second-pokemon');
const pokemonImg3 = document.getElementById('third-pokemon');
const pokemonRadio1 = document.getElementById('first-pokemon-input');
const pokemonRadio2 = document.getElementById('second-pokemon-input');
const pokemonRadio3 = document.getElementById('third-pokemon-input');
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
    //render pokemon on page
    let pokemon1 = pokemon[randomPokedex1];
    console.log(pokemon1, 'pokemon1');

    encounterPokemon(pokemon1.id);
    pokemonRadio1.value = pokemon1.id;
    console.log(pokemonRadio1);

    pokemonImg1.src = pokemon1.url_image;

    let pokemon2 = pokemon[randomPokedex2];
    encounterPokemon(pokemon2.id);
    pokemonRadio2.value = pokemon2.id;
    pokemonImg2.src = pokemon2.url_image;

    let pokemon3 = pokemon[randomPokedex3];
    encounterPokemon(pokemon3.id);
    pokemonRadio3.value = pokemon3.id;
    pokemonImg3.src = pokemon3.url_image;
};

let totalPlays = 0;
generatePokemon();

button.addEventListener('click', ()=> {
    const selectedRadio = document.querySelector('input[type=radio]:checked');
    console.log(selectedRadio);
    if (selectedRadio) {
        const selectedPokemon = Number(selectedRadio.value);
        console.log(selectedPokemon);
        totalPlays++;
        capturePokemon(selectedPokemon);
        if (totalPlays >= 10) {
            window.location = '../Results';
        } else {
            generatePokemon();
        }
    }
});
