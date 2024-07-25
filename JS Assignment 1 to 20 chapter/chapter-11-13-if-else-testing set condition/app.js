// Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// let str = prompt("Enter the charcter");
// if(str==''){
//     document.write("Please enter the ASCII Code");
// }
// let result = str.charCodeAt(0);
    
//  if(result >=48 && result <=57){
//     document.write("This is number");
//  }else if(result >=97 && result <= 122){
//     document.write("This is lowecase letter");
// }else if(result >=65 && result <=90){
//     document.write("This is uppercase letter");
// }else{
//     document.write("The input is neither a number nor a letter");
// }





// Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal

// let num1 = parseFloat(prompt("Enter the first number"));
// let num2 = parseFloat(prompt("Enter the second number"));

// if(num1 > num2){
//     document.write(num1+""+"is greater than"+ " "+num2);
// }else if(num1<num2){
//     document.write(num1+" "+"is less than"+ " "+num2);
// }else{
//     document.write(num1+" "+"is equal to"+ " "+num2);
// }

// Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero. 


// let input = +prompt("Enter the number");
//     if(isNaN(input)){
//         document.write("please enter the number not a character");
//     }else if(input > 0 ){
//         document.write("Number is positive");
//     }else if(input < 0){
//         document.write("number is negaitive");
//     }else if(input == 0){
//         document.write("number is 0")
//     }

//  Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise 

// let character = prompt("Enter the one character");
// character = character.toLowerCase();
// if(!isNaN(character) || character.trim() === ''){
//     document.write("Please enter character");
// }else if(character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u'){
//     document.write("true");
// }else{
//     document.write("false");
// }

// Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


// let password = +prompt("Enter the password");

// let store_pas = 12345;

// if(password==" "){
//     document.write("Please enter the password");
// }else if(password === store_pas){
//     document.write("Correct! The password you entered matches the original password");
// }else if(password!=store_pas){
//     document.write("Incorrect password");
// }
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// }else{ 
// greeting = "Good evening"; 
// }

// Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements 

// let hour = +prompt("Enter the time from 24 hours clock formate");
// if(hour==""){
//     document.write("Please Enter the time from 24 hours clock formate");
// }else if(isNaN(hour)){
//     document.write("Please Enter the time from 24 hours clock formate");
// }else if(hour.toString().length != 4){
//     document.write("Please Enter the time from 24 hours clock formate  like 1200 and 1700");
// }else if(hour >= 0 && hour <=1200 ){
//     document.write("Good morning"+" "+hour+" "+"AM" );
// }else if(hour >=1200 && hour <=1700){
//     document.write("good afternoon"+" "+hour+" "+"PM");
// }else if(hour >=1700 && hour <=2100){
//     document.write("Good Eveinning"+" "+ hour+" "+"PM");
// }else if(hour >=2100 && hour <=2359){
//     document.write("Good Night"+" "+hour+" "+"PM");
// }