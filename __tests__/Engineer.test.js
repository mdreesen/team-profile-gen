const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('checks for Engineer information', () => {
    const engineer = new Engineer('test');

    // Testing to make sure the name matches the name
    expect(engineer.name).toBe('test');
    // Testing to make sure it checks for any number
    expect(engineer.id).toEqual(expect.any(Number));
    // Testing to make sure it checks for any number
    expect(engineer.officeNumber).toEqual(expect.any(Number));
});