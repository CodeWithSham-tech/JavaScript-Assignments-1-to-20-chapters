// Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser: 
//  chapter 6-9 progarme 1
// initialize a varriable
var a = 10;
//display the output
document.write("The value of a is:"+a+"<br>");
//pre increment
document.write(" The value of ++a is:"+ ++a+"<br>");
document.write("Now the value of a is:"+ a+"<br>");
//post increment
document.write("The value of a++ is:"+ a++ +"<br>");
document.write("Now the value of a is:"+ a++ +"<br>");
//pre decrement
document.write("The value of --a is:"+ --a +"<br>");
document.write("The value of --a is:"+ --a +"<br>");
//post decrement
document.write("The value of --a is:"+ a-- +"<br>");
document.write("The value of --a is:"+ a-- +"<br>");

// chapter 6-9 progarme 2
// What will be the output in variables a, b & result after 
// execution of the following script: 

var a = 2;
var b =1 ;
 var result =  --a - --b + ++b + b--;
              


// result = --a;  
//         --a - --b; 
//          --a - --b + ++b; 
//          --a - --b + ++b + b--;

document.write("A is"+a+"<br>"+"B is"+b+"<br>"+"The result is"+" "+result+"<br>");

// chapter 6-9 progarme 7

// Take 
// a) Take three subjects name from user and store them in 3 
// different variables. 
// b) Total marks for each subject is 100, store it in another 
// variable. 
// c) Take obtained marks for first subject from user and 
// stored it in different variable. 
// Page 2 of 3 
// ALERTS | JAVASCRIPT 
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table) 

// get input from user 
var subject1 = prompt("Enter the subject name");
var subject2 = prompt("Enter the subject name");
var subject3 = prompt("Enter the subject name");

// get input from user
var obtainedmarks1 = +prompt("Enter the obtained marks"+" "+subject1);
var obtainedmarks2 = +prompt("Enter the obtained Marks"+" "+subject2);
var obtainedmarks3 = +prompt("Enter the obtained Marks"+" "+subject3);

//initialize varriable
var totalMarks_of_each_subject = 100;
var totalMarks = 100 * 3;
var totalObtainedMarks = obtainedmarks1 + obtainedmarks2 + obtainedmarks3;
var percentage =  totalObtainedMarks / totalMarks*100;
// check condition if subject or obtained marks not equal to empty
if(subject1 && subject2 && subject3 && obtainedmarks1 && obtainedmarks2 && obtainedmarks3!="" ){
// display data through table
document.write("<table>"+"<tr><th>Subject</th><th>Total Marks</th>"+
    "<th>Obtained Marks</th><th>percenatge</th></tr>"+"<br>"+
    "<tr><td>"+subject1+"</td><td>"
    +totalMarks_of_each_subject+"</td><td>"
    +obtainedmarks1+"</td><td>"+obtainedmarks1+"</td></tr>"+
    
    "<tr><td>"+subject2+"</td><td>"
    +totalMarks_of_each_subject+"</td><td>"
    +obtainedmarks2+"</td><td>"+obtainedmarks2+"</td></tr>"+

    "<tr><td>"+subject3+"</td><td>"
    +totalMarks_of_each_subject+"</td><td>"
    +obtainedmarks3+"</td><td>"+obtainedmarks3+"</td></tr>"+

    "<tr><td>Result<td>"
    +totalMarks+"</td><td>"
    +totalObtainedMarks+"</td><td>"+percentage.toFixed(2)+"</td></tr>"
)
document.write("</table>")
}else{
    document.write("Please enter the subject name or marks");
}

