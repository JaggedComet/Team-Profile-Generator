// Import classes that are needed for the program
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Inquire prompt for the questions asked
inquirer
    .prompt([
        {
            type: "input",
            message: "";
            name: "";
            default: "";
        },
        {
            type: "input",
            message: "";
            name: "";
            default: "";
        },
        {
            type: "input",
            message: "";
            name: "";
            default: "";
        },
        {
            type: "input",
            message: "";
            name: "";
            default: "";
        },
        {
            type: "input",
            message: "";
            name: "";
            default: "";
        },
    ])

    .then(response => {

    });