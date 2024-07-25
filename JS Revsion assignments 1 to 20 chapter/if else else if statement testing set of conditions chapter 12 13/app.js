/* chapter 12 13 progarme 1
Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).*/


// get input from user 
let str = prompt("please enter charcater");
// check condition value is empty or not
if(str==''){
   document.write("please enter the charcter");
}
    // value convert into number using codePointAt(0) function
let result = str.codePointAt(0);
    // check value 
 if(result>=48 && result <=57){
    alert("This is number");
    //check value
 }else if(result>=65 && result <=90){
    alert("This is upperCase letter");
        //check value
 }else if(result>=97 && result <=122){
    alert("This is lowercase letter");
 }






 /* chapter 12 13 prpgrame 2
 Write a JavaScript program that accept two integers and 
display the larger. Also show if the two integers are equal. */


    // get input from user 
 var userNum1 = +parseFloat(prompt("Enter the Ist number"));
 var userNum2 = +parseFloat(prompt("Enter the second number"));

    // check value is intger or string
 if(isNaN(userNum1,userNum2)){
    document.write("Please enter the number not a string");
    // check condition
 }else if(userNum1 > userNum2){
    document.write(userNum1+" "+ "is greater then"+" "+userNum2);
 }else if(userNum1 < userNum2){
    document.write(userNum1+" "+ "is lower then"+" "+userNum2);
 }else if (userNum1 === userNum2){
    document.write(num1+" "+"is equal to"+ " "+num2);
 }else{
    document.write("UserNum 1 and UserNum 2 are empty");
 }







 /* chapter 12 13 progarme 3
  Write a program that takes input a number from user & 
state whether the number is positive, negative or zero. */

 // get value from user using prompt
var inputNmber = +prompt("Enter the number");
//  check value is string or integer and check value is empty or not
if(isNaN(inputNmber) || inputNmber ==""){
    alert("Please enter the numbr ")
}
    // check condition
else if(inputNmber>0){
    alert("The number is positive");
}else if(inputNmber<0){
    alert("The number is negative");
}else if(inputNmber===0){
    alert("The number is 0");
}





/* chapter 12 13 progarme 4
Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise*/
// get input from user 
var vowel = prompt("Enter the string length 1");
    // value convert into lower case
 vowel = vowel.toLowerCase();
    // implement loop for string lenth
 for(var i = 0;i<vowel.length;i++){
      // check string have single space
    if(vowel.slice(i,i+2)===" "){
        document.write("spcae are found"+"<br>");
        break;
    }
        //check string have double space
    if(vowel.slice(i,i+2)==="  "){
        document.write("Double space are found"+"<br>");
        break;
    }
 }
 // user input is string or integer
if(!isNaN(vowel)){
    document.write("Please enter string lenght 1");
}
 // check condition userInput same string
else if(vowel==="a"||vowel==="e"||vowel==="i"||vowel==="o"||vowel==="u"){
    document.write("true");
}else{
    document.write("false");
}






/*chapter 12 13 progarme 5
Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.  Validate the two passwords: 
i. 
Check if user has entered password. If not, then 
give message “ Please enter your password” 
ii. 
Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise. */



//store paswword
var password = 12345;
// get input from user
var passwordUser = +prompt("Enter the passwors");
//check userInput is empty
if(passwordUser==""){
    document.write("Please enter the password");
}else if(password === passwordUser){
    document.write("“Correct");
}else if(password!=passwordUser){
    document.write("IN Correct");
}





/* chapter 12 13 progarme 6

 check condition is true o false?

 This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else 
greeting = "Good evening"; 
}*/


//code fix

var greating;
var hour = 13;
if(hour < 18){
    greating ="Good day";
}else{
    greating = "Good Evening";     // fix condition
}






/*chapter 12 13 progarme 7
Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements*/




// get input from user
var time = +prompt("Enter the time");
//check userInput is empty or not
if(time==""){
    alert("Please enter time")
    // check time is integer or string
}else if(isNaN(time)){
    alert("Please enter the time formate 24 hour clock 1200 1900")
    // check time formate 24 hours clock
    // userInput get length
}else if(time.toString().length!=4){
    alert("Please enter the time formate 24 hour clock 1200 1900")
}
else if(time>0 && time < 1200){
        alert("Good MOrning");
}else if(time>=1200 && time<1700){
    alert("Good Afternoon");
}else if(time>=1700 && time<1900){
    alert("Good Eveing");
}else if(time>=1900 && time<2400){
    alert("Good Night");
}