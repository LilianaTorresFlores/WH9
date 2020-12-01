const inquirer = require('inquirer');
const fs = require('fs');
const utils = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Whats the name of you project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please, describe your project:',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'Please, write the usage information:',
        name: 'usageinfo',
    },
    {
        type: 'input',
        message: 'What should be the contribution guidelines?',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'testingInstructions',
    },
    {
        type: 'list',
        message: 'What type of license will you use?',
        name: 'licenseType',
        choices: ["The MIT License","The Apache License","The GPL License"]
    },
    {
        type: 'input',
        message: 'Whats your github user name?',
        name: 'ghUserName',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    //mandar llamar la otra función , guardar el resultado en un archivo
    var readmeData = utils.generateMarkdown(data)
    //
     fs.writeFile(fileName,readmeData, (err) => err ? console.error(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(response){
        writeToFile("genereted.md",response)
    })

}

// function call to initialize program
init();
