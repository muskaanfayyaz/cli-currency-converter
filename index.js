import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    IMR: 74.57,
    PKR: 200
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "enter currency to convert from",
        choices: ["USD", "EUR", "GBP", "IMR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "enter currency in which you want to convert",
        choices: ["USD", "EUR", "GBP", "IMR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "enter amout to convert",
    }
]);
let from_amount = currency[user_answer.from]; //exchange rate
let to_amount = currency[user_answer.to];
let amount = user_answer.amount;
let base_amount = amount / from_amount; //USD Base Currency //4
let converted_amount = base_amount * to_amount;
console.log("Converted amount is " + converted_amount);
