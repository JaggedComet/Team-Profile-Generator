const Employee = require("./Employee");

// Extending the Employee constructor into Intern
class Intern extends Employee {
    constructor (name, id, email, school) {
        // Calling the employee constructor parameters
        super (name, id, email);
        this.school = school;
    }
    // Getting school from user input
    getSchool () {
        return this.school;
    }
    // Getting intern role instead of employee
    getRole () {
        return "Intern";
    }
}

// exports the module to be used elsewhere
module.exports = Intern;