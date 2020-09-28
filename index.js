const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const generateProfile = require('./src/generateProfile');
const { writeFile, copyFile } = require('./utils/generate-page');
const fs = require('fs');

const questions = () => {
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
        },
        {
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
            type: 'list',
            name: 'confirmAddEngineer',
            message: 'Would you like to add another Engineer?',
            choices: ['Yes', 'No']
        },
        // Add the intern here
        {
            type: 'list',
            name: 'addIntern',
            message: 'Do you want to add an intern?',
            choices: ['Yes', 'No']
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school did your intern attend?'
        },
        {
            type: 'input',
            name: 'role',
            message: "What is the intern's position?"
        }
    ])
};

// starting off with the first set of questions for the Manager
questions()
    // .then() starts with the Engineer questions
    // -=- Generate the profiles -=-
    .then(engineerData => {
        //console.log(engineerData);
        return generateProfile(engineerData);
    })
    // -=- Write the file -=-
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    //-=- Copy the file -=-
    .then(copyFileResponse => {
        console.log(copyFileResponse)
    })
    // -=- Catch any error -=-
    .catch(err => {
        console.log(err);
    });