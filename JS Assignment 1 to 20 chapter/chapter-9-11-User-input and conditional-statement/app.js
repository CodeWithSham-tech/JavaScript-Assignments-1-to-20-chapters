// Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” 

    // let str = prompt("Enter the city Name");
     
    // if(str==="karachi"){
    //     document.write("Welcome the city of lights");
    // }else if(str==="lahore"){
    //     document.write("Welcome the city of butt karahi");
    // }else if(str==""){
    //     document.write("pleaase enter city name");
    // }else{
    //     document.write(str+" "+"citie have no entries in our records")
    // }


//     Write a program to take “gender” as input from user. If the 
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter the Gender Name");

// if(gender==='male'){
//     document.write("Good Moring Sir");
// }else if(gender==='female'){
//     document.write("Good Morning Ma’am.");
// }else{
//     document.write("Please enter the gender : Male or Female");
// }

// Write a program to take input color of road traffic signal 
// from the user & show the message according to this table: 

// let color1 = prompt("Enter the color of road traffic lights Red");
// let color2 = prompt("Enter the color of road traffic lights Yellow");
// let color3 = prompt("Enter the color of road traffic lights Green");
//      if(color1=="red" || color1=="RED" && color2 =="yellow" || color2=="YELLOW" &&color3 == "green" || color3=="GREEN"){
//         document.write("<table>");
//         document.write("<tr><th>Signal Color</th><th>Measges</th></tr>");
//         document.write("<tr><td>"+color1+"</td><td>Must stop </td></tr>");
//         document.write("<tr><td>"+color2+"</td><td>Ready to Move</td></tr>");
//         document.write("<tr><td>"+color3+"</td><td>Move now </td></tr>");
//         document.write("</table>");
       
//     }else if(color1=="" && color2=="" && color3 ==""){
//         document.write("Please enter the color");
//     }else{
//         document.write("Please enter color First is RED"+ "<br>" +"Please enter color Second is Yellow"+"<br>"+ "Please enter color Third is Green");
//     }
   
// Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”
    
// let fuel = prompt("Enter the car fuel in liters");
//     fuel = parseFloat(fuel);
// if(fuel < 0.25){
//     document.write("please refil the car");
// }else{
//     document.write("Fuel level is sufficient");
// }
// let a=4;
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
//     }
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// }else{
//     alert("given condition for variable b is false"); 
// }

// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// }
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === (laborCost + materialCost)){ 
// alert("The cost equals"); 
// }

// if (true){ 
//     alert("True"); 
//     } 
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }
       
// Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute 
// grade as per following table: 
// Show the total marks, marks obtained, percentage, grade .

// let subject1 = prompt ("Enter the subject");
// let subject2 = prompt ("Enter the subject");
// let subject3 = prompt ("Enter the subject");
// let marksObtained1 = +prompt("Enter the marks obtained");
// let marksObtained2 = +prompt("Enter the marks obtained");
// let marksObtained3 = +prompt("Enter the marks obtained");
// let totalMarksOfstudent = marksObtained1+marksObtained2+marksObtained3;
// let totalMarks = 100*3;
// let percentage = totalMarksOfstudent/totalMarks * 100;

// document.write("The total Marks"+" "+totalMarks+"<br>");
// document.write("The Marks Obatined"+" "+totalMarksOfstudent+"<br>");
// document.write("Percentage"+" "+percentage+"%"+"<br>");

// if(percentage >= 80){
//     document.write("Grade :A-One<br>"+"Remarks: Excelent");
// }else if(percentage >= 70){
//     document.write("Grade: A<br>"+" Remarks: Good");
// }else if(percentage >=60){
//     document.write("Grade: B<br>"+" Remarks: You need to improve");
// }else if(percentage<60){
//     document.write("Grade: Fail<br>"+" Remarks: Sorry");
// }

// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”

// let secret_number = 5;
// let find_secret_number = +prompt("Enter the guess secret number");

// if(find_secret_number == secret_number){
//     document.write("Bingo! Correct answer");
// }else if(find_secret_number == +1){
//     document.write("Close enough to the correct answer"); 
// }else{
//     document.write("try again"); 
// }

// Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

//  let number = +prompt("Enter the number divisble by 3");
    
//  if(number % 3 ==0){
//     document.write("the number is divisible by 3");
//  }else{
//     document.write("check the number");
//  }

// Write a program that checks whether the given input is an 
// even number or an odd number.

// let input = +prompt("Enter the input");

// if(input % 2 == 0){
//     document.write("This is even number");
// }else{
//     document.write("This is odd number");
// }

// Write a program that takes temperature as input and 
// shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = +prompt("Enter the tempparture");
//   if(isNaN(temperature)){
//     document.write("please enter the number temprature");
//   }else if(temperature==""){
//     document.write("please enter the number temprature");
// }else if(temperature > 40){
//     document.write("It is too hot outside");
// }else if(temperature >30){
//     document.write("The Weather today is Normal");
// }else if(temperature > 20){
//     document.write("Today’s Weather is cool");
// }else if(temperature > 10){
//     document.write("OMG! Today’s weather is so Cool");
// }else if(temperature > 5){
//     document.write("Bs mar gay asi");
// }else{
//     document.write("chaloo multan");
// }

// Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.

// let firstNumber = parseFloat(prompt("Enter the First Number"));
// let operation = prompt('Enter the operation (+, -, *, /, %):');
// let secondnumber = parseFloat(prompt("Enter the second Number"));

// results = firstNumber,operation,secondnumber;
// if(isNaN(results)){
//     alert("Please enter the number");
// }else if (operation != '+' && operation != '-' && operation != '/' && operation != '%' && operation != '*'){
//         alert("Please enter the correct operation(+, -, *, /, %)");
// }else if(operation=='+'){
//     results = firstNumber + secondnumber;
// }else if(operation == '-'){
//     results = firstNumber - secondnumber;
// }else if(operation == '/'){
//     results = firstNumber -secondnumber;
// }else if(operation == '%'){
//     results = firstNumber % secondnumber;
// }else if(operation == '*'){
//     results = firstNumber * secondnumber;
// }

// document.write("Result of"+" "+results);