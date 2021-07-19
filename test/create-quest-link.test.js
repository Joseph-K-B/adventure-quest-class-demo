import createQuestLink from '../map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test('creates correct html', (assert) => {
    // arrange
    const quest = {
        id: 'dragon',
        title: 'A Problem Dragon',
        map: {
            top: '57%',
            left: '67%'
        }
    };

    const expected = '<a class="quest" href="../quest/?id=dragon" style="top: 57%; left: 67%;">A Problem Dragon</a>';

    // act
    const dom = createQuestLink(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});

