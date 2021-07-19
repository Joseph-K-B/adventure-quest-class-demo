import scoreQuest from '../quest/score-quest.js';
const test = QUnit.test;

QUnit.module('score quest');

test('creates correct html', (assert) => {
    // arrange
    const questId = 'treasure';
    
    const choice = {
        hp: -10,
        gold: 20
    };

    const user = {
        hp: 30,
        gold: 0,
        completed: {}
    };

    const expected = {
        hp: 20,
        gold: 20,
        completed: {
            treasure: true
        }
    };

    // act
    scoreQuest(choice, questId, user);

    // assert
    assert.deepEqual(user, expected);
});