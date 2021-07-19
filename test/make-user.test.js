// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { makeUser } from '../home/make-user.js';
const test = QUnit.test;

test('should create a new user', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        name: 'Benny',
        race: 'elf',
        hp: 35,
        gold: 0,
        completed: {}
    };

    const userData = new FormData();
    userData.set('name', 'Benny');
    userData.set('race', 'elf');
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeUser(userData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
