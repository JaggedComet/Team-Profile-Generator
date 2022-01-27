// Constructor for Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Get name from input
    getName () {
        console.log(this.name);
        return this.name;
    }
    // Get ID from input
    getId() {
        console.log(this.id);
        return this.id;
    }
    // Get Email from input
    getEmail() {
        return this.email;
    }
    // Type of employee
    getRole() {
        return "Employee";
    }
}
// exports the module to be used elsewhere
module.exports = Employee;