import scoreGold from '../results/score-gold.js';
const test = QUnit.test;

QUnit.module('score gold');

test('poor', function(assert) {
    const user = { gold: 0 };
    const score = scoreGold(user.gold);
    assert.equal(score, 'poor');
});

test('modest', function(assert) {
    const user = { gold: 49 };
    const score = scoreGold(user.gold);
    assert.equal(score, 'modest');
});

test('rich', function(assert) {
    const user = { gold: 50 };
    const score = scoreGold(user.gold);
    assert.equal(score, 'rich');
});