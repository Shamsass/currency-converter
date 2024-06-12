#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let usd, Rate = 277.90;
let gbp, Rate = 351.01;
let eur, Rate = 301.12;
let confirmExit;
do {
    confirmExit = await inquirer_1.default.prompt({
        type: "confirm",
        name: "exit",
        message: "Do you want to convert PKR Amount ?"
    });
    if (!confirmExit.exit) {
        break;
    }
    let currencyAmount = await inquirer_1.default.prompt();
    [
        {
            name = "currency",
            type: "list",
            choices: ['US Dollar', 'Pound', 'Euro'],
            message: "please select any currency:"
        },
        {
            name = "amount ",
            type: "number",
            message: "please enter PKR Amount to convert:"
        }
    ];
    ;
    If(currencyAmount.currency == "US Dollar ");
    {
        console.log(`Here is your converted US Dollars :$${currencyAmount.amount / usdRate}`);
    }
    if (currencyAmount.currency == "Pound") {
        console.log(`Here is your converted Britian Pounds :$${currencyAmount.amount / gbpRate}`);
    }
    else {
        console.log(`Here is your converted Euros :$${currencyAmount.amount / euroRate}`);
    }
} while (confirmExit.exit);
