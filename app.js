const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let employeeId = 0;

const questions = [
    {
        type: "input",
        message: "Enter team member's name:",
        name: "name",
        validate: function validateName(name) {
            return name !== '';
        }
    },
    {
        type: "list",
        message: "Select team member's role:",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        message: "Enter team member's email:",
        name: "email",
        validate: function validateName(name) {
            return name !== '';
        }
    },
    {
        type: 'confirm',
        name: 'again',
        message: 'Enter another input? ',
        default: true
    }

]

const managerQuestion = [
    {
        type: "input",
        message: "Enter Manager's Office Number:",
        name: "officeNumber",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const engineerQuestion = [
    {
        type: "input",
        message: "Enter Engineer's GitHub username:",
        name: "githubName",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const internQuestion = [
    {
        type: "input",
        message: "Enter Inter's School:",
        name: "internSchool",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const getEmployeeId = () => employeeId++

// const askQuestions = () => inquirer.prompt(questions);
// const followupQuestion = (data) => {
//     if (data.role === 'Manager') {
//         return inquirer.prompt(managerQuestion);
//     } else if (data.role === 'Engineer') {
//         return inquirer.prompt(engineerQuestion);
//     } else {
//         return inquirer.prompt(internQuestion);
//     }
// }




// const CreateEmployees = (data, data2) => {
//     let id = getEmployeeId()
//     let objName = data.name
//     if (data.role === 'Manager') {
//         const manager = new Manager(data.name, id, data.email, data2.officeNumber)
//         console.log(manager)
//     } else if (data.role === 'Engineer') {
//         const engineer = new Engineer(data.name, id, data.email, data2.githubName)
//     }
// }
const collectInputs = async (inputs = []) => {
    const { again, ...answers } = await inquirer.prompt(questions);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

const init = async () => {
    const inputs = await collectInputs();
    console.log(inputs)
}
// const getInput = () => {
//     let data = inquirer.prompt(questions);
//     while (data.role !== 'done') {
//         if (data.role === 'Manager') {
//             return inquirer.prompt(managerQuestion);
//         } else if (data.role === 'Engineer') {
//             return inquirer.prompt(engineerQuestion);
//         } else {
//             return inquirer.prompt(internQuestion);
//         }

//     }

// }

init();
