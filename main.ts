#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//step 01
const answers = {
    numberone: Number,
    numbertwo: Number,
    operator: String,
} = await inquirer.prompt([
   { type: "number",
     name: "numberone",
    message:"Enter your first number"
},
    { type: "number",
     name: "numbertwo",
    message: "Enter your second number"
},
{ type: "list",
    name: "operator",
    message: "Enter your operator",
    choices: ["+", "-", "*", "/"]}
])

//step 02
const { numberone, numbertwo, operator } = answers;

let result

switch (operator) {
    case "+":
        result = numberone + numbertwo;
        break;
    case "-":
        result = numberone - numbertwo;
        break;
    case "*":
        result = numberone * numbertwo;
        break;
    case "/":
        result = numberone / numbertwo;
        break;
        default:
        console.log("invalid operators");
}
console.log(chalk.yellow(`${numberone} ${operator} ${numbertwo} = ${result}`));
