// // Import modules that are needed for the program
const fs = require("fs");
const inquirer = require("inquirer");

// Employee constructs
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fullTeam = [];

function startPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "teamName",
            message: "What is the name of the team?",
            default: "Merge Conflict",
        }
    ]).then(function (data) {

    });
};

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the name of the Manager for this team?"
            default: "David Luu",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's ID?"
            default: "001",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email?",
            default: "David@email.com",
        }
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number"
            default: "101",
        },
    ]).then(function (data) {

    });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
            default: "Marco Flores",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's id?"
            default: "101",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?"
            default: "Marco@email.com",
        }
        {
            type: "input",
            name: "github",
            message: "What is your Engineer's github?",
            default: "https://github.com/JaggedComet",
        },
    ]).then(function (data) {

    });
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
            default: "Giovanni Barranco",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's ID?"
            default: "102",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
            default: "Gio@email.com",
        },
        {
            type: "input",
            name: "school",
            message: "What school is the Intern from?"
            default: "UCSD",
        }, 
    ]).then(function (data) {

    });
};