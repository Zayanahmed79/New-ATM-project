#! /usr/bin/env node
import inquirer from "inquirer";
let myaccount = 50000;
const mypin = 9779;
let Epin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your pin",
});
if (Epin.pin === mypin) {
    console.log(`Welcome to your account:`);
    let select = await inquirer.prompt({
        name: "op",
        type: "list",
        message: "Select one of these:",
        choices: ["check balance", "withdrawl", "fastcash"],
    });
    if (select.op === "check balance") {
        console.log(`Your current balance is ${myaccount}`);
    }
    else if (select.op === "withdrawl") {
        let withd = await inquirer.prompt({
            name: "with",
            type: "number",
            message: "Enter your withdrawl amount:"
        });
        if (withd.with <= myaccount) {
            myaccount -= withd.with;
            console.log(`Your withdrawl amount:${withd.with}`);
            console.log(`Your remaining amount:${myaccount}`);
        }
        else if (withd.with > myaccount) {
            console.log(`Your tansection can't be processed`);
        }
    }
    else if (select.op === "fastcash") {
        let fcash = await inquirer.prompt({
            name: "cash",
            type: "list",
            message: "Select one of these:",
            choices: ["1000", "2000", "5000", "10000"]
        });
        if (fcash.cash <= myaccount) {
            myaccount -= fcash.cash;
            console.log;
            (`Your withdrawl amount:${fcash.cash}`);
            console.log(`Your remaining amount:${myaccount}`);
        }
        else if (fcash.cash > myaccount) {
            console.log(`Your Transection can't be processed `);
        }
    }
}
else {
    console.log("you entered incorrect pin");
}
