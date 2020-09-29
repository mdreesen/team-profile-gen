class Employee {
    constructor(name = '', id) {
        this.name = name;
        this.id = id
    }
}​
class Engineer extends Employee {
    constructor(name = '', id, github) {
        super(name, id);​
        this.github = github;
    }
    aboutEngineer() {
        return {
            name: this.name,
            id: this.id,
            gitHub: this.github
        };
    }
};​
module.exports = Engineer;