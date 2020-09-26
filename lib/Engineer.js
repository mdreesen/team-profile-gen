class Engineer {
    constructor(name = '') {
        // managers name
        this.name = name;
        // managers id
        this.id = Math.floor(Math.random());
        // office number
        this.officeNumber = Math.floor(Math.random());
    }
    aboutEngineer() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            gitHub: this.github
        };
    }
};

module.exports = Engineer;