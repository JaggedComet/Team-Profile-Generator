class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName (name) {
        this.name += name;
        console.log(this.name);
    }

    getId(id) {
        this.id += id;
        console.log(this.id);
    }

    getEmail(mail) {

    }

    getRole(this) {
        return("Employee");
    }
}