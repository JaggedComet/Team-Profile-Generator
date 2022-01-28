// create Manager card
const createManagerCard = function (manager) {
    return `
    <div class="col-5 mt-4">
        <div class="card h-100 text-white bg-secondary mb-3">
            <div class="card-header text-center">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body fw-bold">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}"> ${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}

// Makes the EngineerCard
const createEngineerCard = function (engineer) {
    return `
    <div class="col-5 mt-4">
        <div class="card h-100 text-white bg-success mb-3">
            <div class="card-header text-center">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body fw-bold">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>

        </div>
    </div>
    `
}

// create Intern card 
const createInternCard = function (intern) {
    return `
    <div class="col-5 mt-4">
        <div class="card h-100 text-white bg-danger mb-3">
            <div class="card-header text-center">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>

            <div class="card-body fw-bold">
                <p>ID: ${intern.id}</p>
                <p>Email:<a href="mailto:${intern.email}"> ${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// Gets the data from index.html
generateHTML = (data) => {

    // Makes the Team Array Cards
    teamArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(employee); 


        // Calls the Manager function to create the card and push to html
        if (role === 'Manager') {
            const managerCard = createManagerCard(employee);

            teamArray.push(managerCard);
        }

        // Calls the Engineer function to create the card and push to html
        if (role === 'Engineer') {
            const engineerCard = createEngineerCard(employee);

            teamArray.push(engineerCard);
        }

        // Calls the Intern function to create the card and push to html
        if (role === 'Intern') {
            const internCard = createInternCard(employee);

            teamArray.push(internCard);
        }
        
    }

    // Joins all the strings together for the array
    const employeeCards = teamArray.join("");

    // Generates the team with the employee cards
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// creates the HTML page
// Uses bootstrap
// Uses google api to generate icons for each role
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team List</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center text-light bg-primary">Team Directory</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>


`;
}

// export to index
module.exports = generateHTML; 
