// chapter 5 progarme 1

// write a progarme takes two numbers and add them new varriable show the resullt

var num1 = 100;
var num2 =20;
var total = num1+num2;
document.write("The sum of"+" "+num1+"and"+num2+"is"+total+"<br>");

//chapter 5 programe 2 (part1)
//Repeat task 1 substrction & multiplication & divison moudule
//substrction
var sub = num1-num2;
document.write("The substraction of"+" "+num1+"and"+num2+"is"+sub+"<br>");
// chater 5 programe 2 (part2)
// multiplication
var multi = num1 * num2;
document.write("The multiplication of"+num1+"and"+num2+"is"+multi+"<br>");
//chapter 5 progarme 2(part3)
var divison = num1 / num2;
document.write("The divison of"+num1+"and"+num2+"is"+divison+"<br>")
//chapter 5 progarmme 3
// Do the following js matheatics expression
//(A)
var num;
document.write("value after varriable declare is ??"+"<br>");
//(B) Initialize varriable after some number
var num =5;
document.write("Initial value is"+ " "+num+"<br>");
//pre incremnet
num = ++num;
document.write("after increment the value is"+" "+num+"<br>");
//add 7 
num = num+7;
document.write("value after addtion is"+" "+num+"<br>");
//pre decrement
num = --num;
document.write("value after decrement is"+" "+num+"<br>");
// reminder is 0
num = num%3;
document.write("The reminder is "+" "+num+"<br>");
// chapter 5 programe 4
// Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output:

// initialize the varriable
var ticketPrice = 600;
var cost = 5;
// declare varriable and multipliy the two varriable
var totalCost = ticketPrice * cost;
document.write("The cost of buy"+cost+"tickets to a movie is "+" "+totalCost+" "+"PKR"+"<br>");

// chapter 5 programe 5
// Write a script to display multiplication table of any 
// number in your browser. E.g

// get the number from user
var number = +prompt("Enter the number");
// get the length from user
var tableLength = +prompt("Enter the table length");
// print the value of number and length
document.write("The table of"+" "+number+"<br>"+"The length of table"+" "+tableLength+"<br>");
//check the user input is empty or not
if(number && tableLength !=""){
// running loop till give length from user
for(var i= 1; i<=tableLength;i++){
// print the value
    document.write(number+"*"+" "+i+"="+number*i+"<br>");
}
}else{
    document.write("Pllease enter the table number or table length ")
}
//chapter 5 program 6

// Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 

//initialize the varriable 
var priceOfItem1 = 650;
var priceOfitem2 = 100;
var orderQuantity1 = 3;
var orderQuantity2 = 5;
var shippingCharges = 100;
// calculate the price of item 1 with quantity
var priceOfItem01 = priceOfItem1 * orderQuantity1;
// calculate the price of item 2 with quantity
var priceOfitem02 =  priceOfitem2 * orderQuantity2;
// total bill of shopping
var totalBill = priceOfItem01 + priceOfitem02 +shippingCharges;
// display receipt of shopping
document.write(
    "The price of item 1 is"+" "+priceOfItem1+"<br>"
    +"The quantity of item 1 is"+" "+orderQuantity1+"<br>"
    + "The price of item 2 is"+" "+priceOfitem2+"<br>"
    +"The quantity of item 2 is"+" "+orderQuantity2+"<br>"
    +"Shipping charges"+" "+shippingCharges+"<br>"
    +"<br>"+"The cost of your order"+" "+totalBill+"<br>"
);

// chapter 6 progarme 7
// Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

// initialize the varriable
var totalMarks = 980;
var obtainedMarks = 750;
//decalre varriable
var percentage;
//calculate percenatge 
percentage= totalMarks / obtainedMarks *100;
// display results
document.write(
    "The total Marks is"+" "+totalMarks+"<br>"
    +"The Obtained Marks"+" "+obtainedMarks+"<br>"
    +"The percentage of"+" "+percentage.toFixed(2)+"<br>"
);

// chapter 6 progarme 8

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// initailze varriable
    var doller = 10;
    var saudiRayal = 25;
    // compute the currency value to pakistani
    var convertCurrency = (doller * 104.80) + (saudiRayal * 28);
    //dispay the results
    document.write("The total currency of pakistan"+" "+convertCurrency+" "+"PKR"+"<br>");
    //chapter 5 programe 9
//     Write a program to initialize a variable with some 
// number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression
//initialize varraible
var number = 5;
//conpute the result in single expression
var result = number+5*10/2
// display the result
document.write(result+"<br>");
//chapter 5 progarme 10
// The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored 
// values. 
//iniatialze the varriable
var currentYear = 2024;
var birthyear = 1994;
//decalre varriable
var calculateAge;
//compute the age
 calculateAge =   currentYear - birthyear;
 //display results
 document.write("The cuurent Age"+" "+currentYear+"<br>"+"The birthyear is"+birthyear+"<br>"+"The age of:"+calculateAge+"<br>");

//  chapter 5 progarme 11
//  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// Page 7 of 9 
// MATH EXPRESSIONS | JAVASCRIPT 
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

//iniatlze the varriable
var radious = 20;
var payyee = 3.142;
//display the results

document.write("The Geometrizer"+"The radious of:"+radious+" <br>"+"Circumference of a circle"+ " "+(2*payyee)*(radious)+"<br>");
document.write("The area of:"+(payyee)*(radious*radious)+"<br>");

// chapter 5 progarme 12
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

var favoriteSnake = "candy";
var currentAge = 15;
var maximumAge = 60;
var estimateAmmountperday = (maximumAge - currentAge)/ currentAge;
document.write("You will Need the:"+estimateAmmountperday+"to last you until the ripe old age of"+maximumAge)







