#! /usr/bin/env node
import inquirer from "inquirer";
let usd Rate :number= 277.90;
let gbp Rate  :number =351.01;
let eur Rate  :number =301.12;
let confirmExit;
do{
    confirmExit=await inquirer.prompt(
    {
        type: "confirm",
        name: "exit",
        message :"Do you want to convert PKR Amount ?"
    }
   );
   if(!confirmExit.exit)
   {
       break;
   }

   let currencyAmount  =await inquirer.prompt();
[
       {

           name ="currency",
           type: "list",
           choices:['US Dollar','Pound','Euro'],
            message : "please select any currency:"

     },
     {
            name ="amount ",
            type: "number" ,
           message : "please enter PKR Amount to convert:"

           }
      ]
);
If (currencyAmount .currency== "US Dollar ")
{
  
  console.log(`Here is your converted US Dollars :$${currencyAmount.amount / usdRate}`);
}
else if (currencyAmount.currency == "Pound")
{
  console.log(`Here is your converted Britian Pounds :£${currencyAmount.amount / gbpRate}`);

}
 else 
 {
   console.log(`Here is your converted Euros :€${currencyAmount.amount / euroRate}`);
}
 
}while(confirmExit.exit);

