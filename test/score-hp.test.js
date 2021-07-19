import scoreHp from '../results/score-hp.js';
const test = QUnit.test;

QUnit.module('score hp');

test('dead', function(assert) {
    const user = { hp: 0 };
    const score = scoreHp(user.hp);
    assert.equal(score, 'dead');
});

test('frail', function(assert) {
    const user = { hp: 34 };
    const score = scoreHp(user.hp);
    assert.equal(score, 'frail');
});

test('healthy', function(assert) {
    const user = { hp: 35 };
    const score = scoreHp(user.hp);
    assert.equal(score, 'healthy');
});