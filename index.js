const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },    
    {
        type: 'input',
        message: 'Describe your Project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Process Details:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How to use:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Licence:',
        name: 'license',
        default: 'MIT',
    },
    {
        type: 'input',
        message: 'Details for Contributing:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Details for Test:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Contact for Questions:',
        name: 'question',
    }    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Your README has been created!')
);        
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => writeToFile('README.md', answers))
}

// function call to initialize program
init();

//TODO: When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//TODO: When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
//TODO: When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
