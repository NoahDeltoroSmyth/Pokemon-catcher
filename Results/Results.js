import { pokemon } from '../Data/pokemon.js';
import { getPokedex, findById } from '../Functions/utils.js';

const results = getPokedex();

const resultsDisplay = document.getElementById('results-display');

for (let item of results) {

    const pokemonId = findById(item.id, pokemon);

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

const names = results.map((item) => {
    const pokemonId = findById(item.id, pokemon);
    return pokemonId.pokemon;
});

const picked = results.map(item => item.picked);

const shown = results.map(item => item.shown);

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    data: {
        labels: names,
        datasets: [{
            type: 'bar',
            label: '# of times captured',
            data: picked,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }, {
            type: 'bar',
            label: '# of times encountered',
            data: shown,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});