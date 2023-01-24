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
        type: 'list',
        message: 'Licence:',
        name: 'license',
        choices: ['MIT','Mozilla', 'Apache 2.0 License', 'The Unlicense', 'None'],
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
        message: 'your Github Username for Questions section:',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'Your Email for Questions section:',
        name: 'email',
    }       
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Your README has been created!')
);        
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => writeToFile('README.md', answers))
}

// function call to initialize program
init();
