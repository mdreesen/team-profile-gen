const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('test');

    // Testing to make sure the name matches the name
    expect(manager.name).toBe('test');
    // Testing to make sure it checks for any number
    expect(manager.id).toEqual(expect.any(Number));
    // Testing to make sure it checks for any number
    expect(manager.officeNumber).toEqual(expect.any(Number));
});