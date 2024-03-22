#!  /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function cli() {
    let rainbow = chalkAnimation.rainbow(`Let Start Calculator
    _____________________
    |  _________________  |
    | |                 | |
    | |                 | |
    | |                 | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
    await sleep();
    rainbow.stop();
}
cli();
async function Calculator() {
    let Calculator = true;
    do {
        const answer = await inquirer.prompt([
            {
                name: "firstNumber",
                type: "number",
                message: "Enter First Number",
            },
            {
                name: "Operator",
                type: "list",
                choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power", "Modulus"],
            },
            {
                name: "secondNumber",
                type: "number",
                message: "Enter Second Number",
            },
        ]);
        // console.log(answer);
        if (answer.Operator === "Addition") {
            console.log("Your Value is :", answer.firstNumber + answer.secondNumber);
        }
        else if (answer.Operator === "Subtraction") {
            console.log("Your Value is :", answer.firstNumber - answer.secondNumber);
        }
        else if (answer.Operator === "Multiplication") {
            console.log("Your Value is :", answer.firstNumber * answer.secondNumber);
        }
        else if (answer.Operator === "Division") {
            console.log("Your Value is :", answer.firstNumber / answer.secondNumber);
        }
        else if (answer.Operator === "Power") {
            console.log("Your Value is :", answer.firstNumber ** answer.secondNumber);
        }
        else if (answer.Operator === "Modulus") {
            console.log("Your Value is :", answer.firstNumber % answer.secondNumber);
        }
        else {
            console.log("Enter Valid Operator");
        }
        const { continueCalculators } = await inquirer.prompt([
            {
                name: "continueCalculators",
                type: "confirm",
                message: "You Perform the More task ?",
                default: true
            }
        ]);
        Calculator = continueCalculators;
    } while (Calculator);
}
Calculator();
