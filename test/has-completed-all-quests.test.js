// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { hasCompletedAllQuests } from '../map/has-completed-all-quests.js';

const test = QUnit.test;

test('should return true if user has completed all quests', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        completed: {
            dragon: true,
            monsters: true, 
            treasure: true
        }
    };
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hasCompletedAllQuests(user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return false if user has not completed all quests', expect => {
    const user = {
        completed: {
            dragon: true
        }
    };
    const expected = false;
    const actual = hasCompletedAllQuests(user);
    expect.equal(actual, expected);
});