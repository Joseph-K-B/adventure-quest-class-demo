import makeUser from '../home/make-user.js';
const test = QUnit.test;

QUnit.module('make user');

test('create user object from form data', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'Galadriel');
    formData.set('race', 'elf');

    const expected = {
        name: 'Galadriel',
        race: 'elf',
        hp: 35,
        gold: 0,
        completed: {}
    };

    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, expected);
});
