export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

// export function setResults(pokemon) {
//     const stringyResults = JSON.stringify(pokemon);
//     localStorage.setItem('POKEMON', stringyResults);
//}

export function getPokedex() {
    const resultsString = localStorage.getItem('POKEMON') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setPokedex(pokemon) {
    const resultsString = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', resultsString);
}

export function capturePokemon(id) {
    const newResults = getPokedex();
    const capturePokemon = findById(id, newResults);
    
    if (capturePokemon){
        capturePokemon.picked ++;  
    } else {
        const newCapturePokemon = { id: id, shown: 1, picked: 1 };
        newResults.push(newCapturePokemon);
    }

    setPokedex(newResults);
}

export function encounterPokemon(id) {
    const newResults = getPokedex();
    const encounterPokemon = findById(id, newResults);
    
    if (encounterPokemon){
        encounterPokemon.shown ++;  
    } else {
        const newEncounterPokemon = { id: id, shown: 1, picked: 0 };
        newResults.push(newEncounterPokemon);
    }

    setPokedex(newResults);
}