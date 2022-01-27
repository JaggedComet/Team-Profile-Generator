const Employee = require ("./Employee");

// Extends the Employee constructor into Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calls the paramters from Employee constructor
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // Get the office number from user input
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Replace the Employee role with Manager
    getRole() {
        return "Manager";
    }
}

// exports the module to be used elsewhere
module.exports = Manager;