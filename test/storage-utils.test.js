// IMPORT MODULES under test here:

import { setUser, getUser } from '../data/storage-utils.js';

const test = QUnit.test;

test('setUser should update localStorage with user info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        name: 'Benny',
        race: 'elf',
        hp: 35,
        gold: 0,
        completed: {}
    };
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    setUser(expected);
    const actual = getUser();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
