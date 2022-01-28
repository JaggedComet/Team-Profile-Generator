// Requiring the Node Modules
const fs = require('fs'); 
const inquirer = require('inquirer');

// Link to the Employee Constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


// Constant to link to the html page
const generateHTML = require('./src/generateHTML');

// Final array with all the team data
const finalArray = []; 

// Prompt for Manager information 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
        }
    // Adding the manager data to the array
    ]).then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        finalArray.push(manager); 
        console.log(manager); 
    })
};

// Adding employees
const addEmployee = () => {
    // Prompts the user to input employee information
    console.log("Please input Employee information");
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
        },
        {
            type: 'confirm',
            name: 'addMoreEmployee',
            message: 'Would you like to add more team members?',
            // So they can press anything other than y/n and it'll count as no
            default: false
        }
    // Takes the employee data and has if/else statements
    ]).then(employeeData => {
        let { name, id, email, role, github, school, addMoreEmployee } = employeeData; 
        let employee; 
        // If the role matches "Engineer", then it'll take the name, id, email, github and show it on the console log for "Engineer"
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
            
        // If the role matches "Intern", then it'll take the name, id, email, school and show it on the log
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        // Pushes each new Employee to the end of the array
        finalArray.push(employee); 

        // If you confirm y on adding more Team members, will add to the array
        if (addMoreEmployee) {
            return addEmployee(finalArray); 
        } else {
            return finalArray;
        }
    })

};


// Constant to write file to an index.html file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // If there is an error, it will console.log it 
        if (err) {
            console.log(err);
            return;
        // When finished, console log will prompt you
        } else {
            console.log("Your team is finished, please check the index.html in the /dist folder!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(finalArray => {
    return generateHTML(finalArray);
  }).then(pageHTML => {
    return writeFile(pageHTML);
  }).catch(err => {
 console.log(err);
  });