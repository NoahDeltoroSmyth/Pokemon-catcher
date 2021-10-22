export function setResults(pokemon) {
    const stringyResults = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', stringyResults);
}

export function getPokedex() {
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setPokedex() {
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function capturePokemon(id) {
    const newResults = getPokedex();
    const capturePokemon = newResults.find(pokemon => pokemon.id === id);
    
    if (capturePokemon){
        capturePokemon.picked ++;  
    } else {
        const newCapturePokemon = { id: id, shown: 1, picked: 1 };
        newResults.push(newCapturePokemon);
    }

    setResults(newResults);
}

export function encounterPokemon(id) {
    const newResults = getPokedex();
    const encounterPokemon = newResults.find(pokemon => pokemon.id === id);
    
    if (encounterPokemon){
        encounterPokemon.shown ++;  
    } else {
        const newencounterPokemon = { id: id, shown: 1, picked: 1 };
        newResults.push(newencounterPokemon);
    }

    setResults(newResults);
}