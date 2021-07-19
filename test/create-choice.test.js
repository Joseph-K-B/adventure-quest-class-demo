import createChoice from '../quest/create-choice.js';
const test = QUnit.test;

QUnit.module('create choice');

test('creates correct html', (assert) => {
    // arrange
    const choice = {
        id: 'run',
        description: 'Run away like good Sir Robin'
    };

    const expected = '<label class="choice">'
        + '<input type="radio" name="choice" required="" value="run">'
        + '<span>Run away like good Sir Robin</span>'
        + '</label>';

    // act
    const dom = createChoice(choice);

    // assert
    assert.equal(dom.outerHTML, expected);
});

