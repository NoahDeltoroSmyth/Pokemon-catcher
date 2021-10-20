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
    
    pickedPokemon.picked ++;  

    setResults(newResults);
}