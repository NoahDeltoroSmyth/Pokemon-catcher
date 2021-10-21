// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getPokedex, capturePokemon } from '../Functions/utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('getPokedex() function should pull info into localStorage', (expect) => {
    const expected = [
        { id: '1', shown: 3, picked: 3 },
        { id: '2', shown: 4, picked: 4 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(expected));

    const actual = getPokedex();

    expect.deepEqual(actual, expected);
});

test('capturePokemon() function should add item into localStorage', (expect) => {
    localStorage.removeItem('POKEMON');
    
    const mockResults = [
        { id: '1', shown: 3, picked: 2 },
    ];

    localStorage.setItem('POKEMON', JSON.stringify(mockResults));

    const expected = [
        { id: '1', shown: 3, picked: 3 },
    ];

    capturePokemon('1');

    const actual = getPokedex();

    expect.deepEqual(actual, expected);

});
