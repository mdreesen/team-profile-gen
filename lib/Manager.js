class Manager {
    constructor(name = '') {
        // managers name
        this.name = name;
        // managers id
        this.id = Math.floor(Math.random());
        // office number
        this.officeNumber = Math.floor(Math.random());
    }
};

module.exports = Manager;