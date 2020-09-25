const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

function Start() {
    console.log(`
        ===================
        Manager Information
        ===================
        `)
};

Start.prototype.mQuestions = function() {
    return inquirer.prompt({
            type: 'input',
            name: 'Manager Name',
            message: "What is your Manager's name?"
        }, {
            type: 'input',
            name: 'Manager ID',
            message: "What is your Manager's ID?"
        }, {
            type: 'input',
            name: 'Manager office number',
            message: "WHat is your Manager's office number?"
        })
        .then(({ name }) => {
            this.manager = new Manager(name);

            this.viewProfile();
        })
};


module.exports = Start();