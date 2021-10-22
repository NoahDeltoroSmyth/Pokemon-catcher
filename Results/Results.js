import { pokemon } from '../Data/pokemon.js';
import { getPokedex, findById } from '../Functions/utils.js';

const results = getPokedex();

const resultsDisplay = document.getElementById('results-display');

for (let item of results) {
    console.log(item, 'item');
    
    const pokemonId = findById(item.id, pokemon);
    console.log(pokemonId, 'pokemonId');

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = pokemonId.url_image;

    const name = document.createElement('h2');
    name.textContent = pokemonId.pokemon;

    const captured = document.createElement('span');
    captured.textContent = `Captured: ${item.picked}`;

    const encountered = document.createElement('span');
    encountered.textContent = `Encountered: ${item.shown}`;

    div.append(img, name, captured, encountered);
    resultsDisplay.append(div);

}