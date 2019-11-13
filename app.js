const inquirer = require('inquirer');
const validator = require('validator');

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



const askQuestions = () => inquirer.prompt(questions);
const followupQuestion = (data) => {
    if (data.role === 'Manager') {
        return inquirer.prompt(managerQuestion);
    } else if (data.role === 'Engineer') {
        return inquirer.prompt(engineerQuestion);
    } else {
        return inquirer.prompt(internQuestion);
    }
}

async function init() {

    const data = await askQuestions();
    const data2 = await followupQuestion(data);
}





init();
