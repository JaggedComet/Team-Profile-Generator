// Import main constructor, Employee
const Employee = require("./Employee");

// extending Employee constructor into Engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Calling the Employee constructor
        super(name, id, email);
        this.github = github;
        
    }

    // Getting the Github from user input
    getGithub () {
        return this.github;
    }
    // getting the Engineer role instead of Employee role
    getRole () {
        return "Engineer";
    }
}

// exports the module to be used elsewhere
module.exports = Engineer;

