const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const generateProfile = require('./src/generateProfile');
const { writeFile, copyFile } = require('./utils/generate-page');

// Questions about the Manager
function managerQuestions() {
    console.log(`
        ===================
        Manager Information
        ===================
        `);

    return inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: "What is your Manager's name?"
    }, {
        type: 'input',
        name: 'managerId',
        message: "What is your Manager's ID?"
    }, {
        type: 'input',
        name: 'mOfficeNumber',
        message: "What is your Manager's office number?"
    }])
};

// This is the Engineer questions
function engineerQuestions(engineerData) {
    // If no engineer data, return nothing
    if (!engineerData.engProfile) {
        engineerData.engProfile = [];
    };

    console.log(`
    ====================
    Engineer Information
    ====================
    `)
    return inquirer.prompt([{
                type: 'input',
                name: 'engineerName',
                message: "What is your Engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is your Engineer's ID?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your Engineer's email?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is your Engineer's Github?"
            },
            {
                type: 'confirm',
                name: 'confirmAddEngineer',
                message: 'Would you like to add another Engineer?',
                default: false
            }
        ])
        .then(portfolioData => {
            engineerData.engProfile.push(portfolioData);

            if (portfolioData.confirmAddEngineer) {
                return engineerQuestions(engineerData);
            } else {
                return engineerData;
            }
        });
};

// starting off with the first set of questions for the Manager
managerQuestions()
    // .then() starts with the Engineer questions
    .then(engineerQuestions)
    .then(portfolioData => {
        return generateProfile(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile;
    })
    .catch(err => {
        console.log(err);
    })

// module.exports = managerQuestions();
// module.exports = engineerQuestions();