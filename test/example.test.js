// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getResults } from '../utils.js';

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

test('getResults() function should pull info into localStorage', (expect) => {
    const mockResults = [
        { id: '1', picked: 3 },
        { id: '2', picked: 4 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(mockResults));

    const results = getResults();

    expect.deepEqual(results, mockResults);
});