const fs = require("fs");
const path = require("path");
const inquirer = require("inquierer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github usernae?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "Project to URL",
        message: "What is your project URL?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short dscription of your project."
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "Installation",
        message: "what command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about contributing to the repo?"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync.path.join(process.cwd(), fileName),  data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
}

init();
