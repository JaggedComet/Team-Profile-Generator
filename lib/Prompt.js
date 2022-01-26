// class Prompt {


//     // Get user input to create a list
//     initList() {
//         constructor () {
            
//         }
//         // Inquire prompt for the questions asked
//         inquirer
//             .prompt([{
//                     type: "input",
//                     message: "";
//                     name: "";
//                     default: "";
//                 },
//                 {
//                     type: "input",
//                     message: "";
//                     name: "";
//                     default: "";
//                 },
//                 {
//                     type: "input",
//                     message: "";
//                     name: "";
//                     default: "";
//                 },
//                 {
//                     type: "input",
//                     message: "";
//                     name: "";
//                     default: "";
//                 },
//                 {
//                     type: "input",
//                     message: "";
//                     name: "";
//                     default: "";
//                 },
//             ])
//             // put properties of the object after .then in the ()
//             .then(({
//                 title,
//                 name
//             }) => {
//                 this.list = new TaskList(title, date);
//                 this.getNewTask();
//             });
//         // Ask the user for a new task. Adds it to the task list. Ask user if the user wants to add another task.
//         getNewTask() {
//             console.log("called get new task");
//             inquirer
//                 .prompt([{
//                         type: "input",
//                         message: "";
//                         name: "";
//                         default: "";
//                     },
//                     {
//                         type: "input",
//                         message: "";
//                         name: "";
//                         default: "";
//                     },
//                 ]).then(({
//                     text,
//                     addAnotherTask
//                 }) => {
//                     this.list.addTask(text);
//                     if (addAnotherTask) {
//                         this.getNewTask();
//                     } else {
//                         this.writeList();
//                     }
//                 })
//         }

//         // Saves Task list to a txt file and exit
//         writeList() {
//             // TODO: write the result to file instead of printing to the console

//         }
//     }
// }
// // // Example of recursive function
// // function recursiveFunction(num) {
// //     console.log(num);
// //     if(num < 1) {
// //         console.log("The end");
// //         return;
// //     } else {
// //     recursiveFunction(num - 1);
// //     }
// // }

// // recursiveFunction(5);