class Manager {
    constructor(name = '') {
        // managers name
        this.name = name;
        // managers id
        this.id = Math.floor(Math.random());
        // office number
        this.officeNumber = Math.floor(Math.random());
    }

    aboutManager() {
        return {
            name: this.name,
            id: this.id,
            officeNumber: this.officeNumber
        };
    }
};

module.exports = Manager;