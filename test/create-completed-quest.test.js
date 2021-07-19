import createCompletedQuest from '../map/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('create completed quest');

test('creates correct html', (assert) => {
    // arrange
    const quest = {
        id: 'treasure',
        title: 'The Golden Treasure',
        map: {
            top: '31%',
            left: '5%'
        }
    };

    const expected = '<span class="quest completed" style="top: 31%; left: 5%;">The Golden Treasure</span>';

    // act
    const dom = createCompletedQuest(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});

