import findById from '../common/find-by-id.js';
const test = QUnit.test;

QUnit.module('find by id');

const items = [
    { id: 'one' },
    { id: 'two' },
    { id: 'three' },
];

test('finds item', function(assert) {
    const found = findById(items, 'two');
    assert.deepEqual(found, { id: 'two' });
});

test('no item found', function(assert) {
    const found = findById(items, 'four');
    assert.equal(found, null);
});