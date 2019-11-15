const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = [];
let id = 0;
let exit = false;

const questionsStart = [
    {
        type: "list",
        message: "Select team member's role:",
        name: "role",
        choices: ["Manager", "Engineer", "Intern", "Exit"]
    }
]

const baseQuestions = [
    {
        type: "input",
        message: "Enter team member's name:",
        name: "name",
        validate: function validateName(name) {
            return name !== '';
        }
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
        name: "github",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const internQuestion = [
    {
        type: "input",
        message: "Enter Inter's School:",
        name: "school",
        validate: function validateName(name) {
            return name !== '';
        }
    }
]

const inputStart = async () => {
    const { role, ...answers } = await inquirer.prompt(questionsStart);
    return role;
};

const collectInputs = async (role) => {
    id = id + 1
    if (role === 'Manager') {
        const questions = [...baseQuestions, ...managerQuestion];
        member = await inquirer.prompt(questions);
        const memberObj = new Manager(member.name, id, member.email, member.officeNumber);
        teamArray.push(memberObj);
    } else if (role === 'Engineer') {
        const questions = [...baseQuestions, ...engineerQuestion];
        member = await inquirer.prompt(questions)
        const memberObj = new Engineer(member.name, id, member.email, member.github);
        teamArray.push(memberObj);
    } else if (role === 'Intern') {
        const questions = [...baseQuestions, ...internQuestion]
        member = await inquirer.prompt(questions)
        const memberObj = new Intern(member.name, id, member.email, member.school);
        teamArray.push(memberObj);
    } else {
        return exit = true;
    }
}

const init = async () => {
    while (!exit) {
        const role = await inputStart()
        // const inputs = await collectInputs(role);
        await collectInputs(role);
    }
    console.log(teamArray)


}

init();
