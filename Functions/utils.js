export function setResults(pokemon) {
    const stringyResults = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', stringyResults);
}

export function getResults() {
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function pickPokemon(id) {
    const newResults = getResults();
    const pickedPokemon = newResults.find(pokemon => pokemon.id === id);
    
    if (pickedPokemon){
        pickedPokemon.picked ++;  
    } else {
        const newPickedPokemon = { id: id, shown: 1, picked: 1 };
        newResults.push(newPickedPokemon);
    }

    setResults(newResults);
}

