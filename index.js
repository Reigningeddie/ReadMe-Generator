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
        
    },
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
