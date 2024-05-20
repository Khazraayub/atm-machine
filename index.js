#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; //Dollar
let myPin = 2927;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number",
    },
]);
if (pinAnswer.pin == myPin) {
    console.log(chalk.bold.greenBright("Correct pin code !!! "));
    console.log(chalk.bold.greenBright("Welcome to your account!!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What do you want?",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check balance"],
        },
    ]);
    // if user select withdraw option
    if (operationAns.operation == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(chalk.bold.blueBright(`You have succesfully withdrawn... Now your remaining balance is: ${myBalance}`));
        }
        else {
            console.log(chalk.bold.redBright(`Sorry!!!!! You have insufficient balance`));
        }
    }
    // if user select fast cash option
    else if (operationAns.operation == "Fast cash") {
        let FastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000", "15000", "20000"],
            },
        ]);
        if (FastcashAns.amount <= myBalance) {
            myBalance -= FastcashAns.amount;
            console.log(chalk.bold.blueBright(`You have succesfully transacted your amount.... Now your remaining balance is: ${myBalance}`));
        }
        else {
            console.log(chalk.bold.redBright(`Sorry!!!!! You have insufficient balance`));
        }
    }
    //if user select check balance option
    else if (operationAns.operation == "Check balance") {
        console.log(chalk.bold.blueBright(`Your balance is: ${myBalance}`));
    }
}
else {
    console.log(chalk.bold.redBright("Incorrect pin code!!!"));
    console.log(chalk.bold.redBright("Try Again!!"));
}
