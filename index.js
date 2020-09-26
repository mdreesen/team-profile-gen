const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const generateProfile = require('./src/generateProfile');
const { writeFile, copyFile } = require('./utils/generate-page');
const fs = require('fs');

// Questions about the Manager
managerQuestions = () => {
    console.log(`
        ===================
        Manager Information
        ===================
        `);

    return inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: "What is your Manager's name? (REQUIRED)",
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log("Please Enter The Manager's Name");
                return false;
            }
        }
    }, {
        type: 'number',
        name: 'managerId',
        message: "What is your Manager's ID?",
    }, {
        type: 'number',
        name: 'mOfficeNumber',
        message: "What is your Manager's office number?",
    }])
};

// TODO - global array to have data persist in

// This is the Engineer questions
engineerQuestions = engineerData => {
    // pushing data to an empty array
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
                // Prompt to add another engineer
                type: 'confirm',
                name: 'confirmAddEngineer',
                message: 'Would you like to add another Engineer?',
                default: false
            }
        ])
        .then(portfolioData => {
            console.log('line71');
            console.log(portfolioData);
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
    // -=- Generate the profiles -=-
    .then(engineerData => {
        console.log(engineerData);
        // return generateProfile(engineerData);
    })
    // -=- Write the file -=-
    //.then(pageHTML => {
    //   return writeFile(pageHTML)
    // })
    //-=- Copy the file -=-
    //.then(copyFileResponse => {
    //    console.log(copyFileResponse)
    //})
    // -=- Catch any error -=-
    .catch(err => {
        console.log(err);
    });