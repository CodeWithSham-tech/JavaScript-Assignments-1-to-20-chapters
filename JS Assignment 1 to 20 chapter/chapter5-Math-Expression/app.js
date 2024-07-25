// Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser. 

// let num1 = 10;
// let num2 = 20;
// let total= num1+num2;
// document.write("sum of"+num1+" "+"and"+" "+num2+"is"+" "+total);

// Repeat task1 for subtraction, multiplication, division & 
// modulus. 

//substraction

// let num1 = 50;
// let num2 = 20;
// let total= num1-num2;
// document.write("substraction of"+num1+" "+"and"+" "+num2+"is"+" "+total);

//multiplication

// let num1 = 50;
// let num2 = 20;
// let total= num1*num2;
// document.write("Multiplication of"+num1+" "+"and"+" "+num2+"is"+" "+total);

//division

// let num1 = 60;
// let num2 = 20;
// let total= num1/num2;
// document.write("Divide of"+num1+" "+"and"+" "+num2+"is"+" "+total);

// Do the following using JS Mathematic Expressions 
// a. Declare a variable. 

// var x= 11;

// x++;
// document.writeln(x);

// var x = 12 + 7;
// document.writeln(x);

// var x= --x;

// document.writeln(x);

// var x = 18;
 
// var total = x%3;

// document.write("The reminder of"+" "+total);

// Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output:

// var cost_movive_ticket = 600;

// var cost_5_tickets = 5;

// var results = cost_movive_ticket * cost_5_tickets;

// document.write("Total cost to buy"+" "+cost_5_tickets+" " +"to a moive"+" "+results+" "+"PKR");

// Write a script to display multiplication table of any 
// number in your browser. E.g 

// var table = +prompt("Ehter the table number");
// for(let i = 1; i<=10; i++){
//     document.write(table+" "+ "*" + i + "=" + i*table + "<br>");
// }
// Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables

//    let price = 650;
//    let quantity = 3;
//    let price2 =100;
//    let quantity1 = 7;
//    let shipping_charges =100;
//  for(i=1; i<=5;i++){
//      if(i===2){
//         break;
//      }
//     let result = price*3 +price2*7+shipping_charges;
//     document.write("The price of " + " "+ price+"<br>"+"The quantity of 1 is" + " "+ quantity+"<br>"
//         +"The price of item 2 " + " "+ price2+ "<br>"
//         +"The quantity of 1 " + " "+ quantity1+"<br>"
//         +"The shipping charges " + " "+ shipping_charges+"<br>"
//         +"The cost of item"+" "+result+"<br>");
//  }




// Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

let totalMarks = 980;
let obtainedMarks = 804;
let percentage = (obtainedMarks/totalMarks) *100;

for(i = 1; i<=3;i++){
    if(i===2){
        break;
    }
    document.write("The total marks" + totalMarks+"<br>"
        +"The obrained Marks"+obtainedMarks+"<br>"
        +"The percentage"+percentage);
    }

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee) 

// var dollars = 10;
// var saudi  = 25;
//  let total = (dollars*104.28)+ (saudi*28);
//  alert(total);
// document.write("Total currency is PKR"+total);

// Write a program to initialize a variable with some 
// number and do arithmetic in following sequence: 


// let num = 2;
// let result = num+5+num*10/2;
// document.write(result);

// The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored 
// values. 
// Output them to the screen like so: “They are either NN or NN 
// years old”.

// let birthYear = 1994;
// let currentYear = 2024;

// document.write("The birthYear"+birthYear+"<br>"
//     +"The current Year"+currentYear+"<br>"
//     +"Your age is"+(currentYear-birthYear));

// The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of 
// your life. 
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

// let favoriteSnake = "dairyMilk";
// let currentAge = 15;
// let maximumAge = 65;
// let estimatedAmoount = 3;

// //how much dairy milk are consumed into 50 year

// let total_need = (estimatedAmoount*365) * (maximumAge - currentAge)/365;
// document.write("you will ne need"+total_need+ favoriteSnake +"to last you until the ripe old age" + maximumAge);

// The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 

// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// var radius = 20;
// var payee =3.142;

// document.write("The radious of"+" "+radius+"<br>"+"The circumference is"+(2*payee)*radius+"<br>");
// document.write("The Area of"+(payee*(radius*radius)));