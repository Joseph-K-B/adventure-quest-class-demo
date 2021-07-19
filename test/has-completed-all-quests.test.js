import hasCompletedAllQuests from '../map/has-completed-all-quests.js';
const test = QUnit.test;

QUnit.module('has completed all quests');

const quests = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' },
];

test('true', function(assert) {
    const user = {
        completed: {
            one: true,
            two: true,
            three: true
        }
    };

    const hasCompleted = hasCompletedAllQuests(quests, user);

    assert.equal(hasCompleted, true);
});

test('false', function(assert) {
    const user = {
        completed: {
            one: true,
            three: true
        }
    };

    const hasCompleted = hasCompletedAllQuests(quests, user);

    assert.equal(hasCompleted, false);
});