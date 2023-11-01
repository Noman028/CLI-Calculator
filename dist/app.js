import * as inquirer from "inquirer";
import chalk from "chalk";
// Calculator Operators
var Operator;
(function (Operator) {
    Operator["Add"] = "Addition";
    Operator["Subtract"] = "Subtraction";
    Operator["Multiply"] = "Multiplication";
    Operator["Divide"] = "Division";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter the 1st number:",
            validate: validateNumber
        },
        {
            type: "rawlist",
            name: "operator",
            message: "select an operator:",
            choices: Object.values(Operator)
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the 2nd number:",
            validate: validateNumber
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operator.Add) {
        result = num1 + num2;
        console.log(chalk.green.bgBlueBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.Subtract) {
        result = num1 - num2;
        console.log(chalk.yellow.bgBlueBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.Multiply) {
        result = num1 * num2;
        console.log(chalk.blue.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.Divide) {
        result = num1 / num2;
        console.log(chalk.red.bgGreenBright(`Result is : ${result}`));
    }
}
export default main;
