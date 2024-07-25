// /*chapter 9 11 progarme 1

// Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” */

var city = prompt ("Enter the city name");
  for(i = 0; i<=city.length;i++){
    if(city.slice(i,i+2)==="  "){
        alert("Double space are found");
    }
  }
if(city === "karachi"){
     
    alert("Welcome to city of lights");
}else if(!isNaN(city) || city ==""){
    alert("please enter the city name")
}else{
    alert("city not found");
}

/* chapter 9 11 progarme 2 
Write a program to take “gender” as input from user. If the 
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am.*/

var input = prompt("Enter the gender name");
for(i = 0; i<=input.length;i++){
    if(input.slice(i,i+2)==="  "){
        alert("Double space are found");
        break;
    }
 }
if(input==="male"){
    alert("Good Morning Sir");
}else if(input==="female"){
    alert("Good morning ma'ma");
}else if(input=="" || !isNaN(input)){
    alert("PLease enter the gender name");
}else{
    document.write("Gender are not found");
}
 /*chapter 9 11 progarme 3
 Write a program to take input color of road traffic signal 
from the user & show the message according to this table:*/

var color1 = prompt("Enter the color red");
var color2 = prompt("Enter the color yellow");
var color3 = prompt("Enter the color green");

if(color1==="red" && color2==="yellow" && color3 =="green"){
    document.write("<table>"+"<tr><th>Color</th><th>Signal Measges</th></tr>"
        +"<tr><td>"+color1+"</td><td>Must be stop</td></tr>"
         +"<tr><td>"+color2+"</td><td>Move to ready</td></tr>"
          +"<tr><td>"+color3+"</td><td>Move Now</td></tr>"
    ) 
    document.write("</table>")
}else if(color1=="" || color2==" " || color3 ==""){
    document.write("PLease enter the color name");
}else{
    document.write("Please enter color First is RED"+ "<br>" +"Please enter color Second is Yellow"+"<br>"+ "Please enter color Third is Green");
    }
    
   /* chapter 9 11 progarme 4

    Write a program to take input remaining fuel in car (in 
        litres) from user. If the current fuel is less than 0.25litres, 
        show the message “Please refill the fuel in your car”  */

        var remainingFuel = +prompt("Enter the remaining fuel");

        if(remainingFuel < 0.25){
            alert("PLease refill in your car");
        }else if(remainingFuel > 0.25){
            alert("Heavy fuel in your car")
        }

        /* chapter 9 11 progarme 5
        Run this script, & check whether alert message would be 
        displayed or not. Record the outputs. */
        //a.
         var a = 4; 
        if (++a === 5){ 
        alert("given condition for variable a is true");   // condition is true
        } 
        //b.
         var b = 82; 
        if (b++ === 83){ 
        alert("given condition for variable b is true");  // condition is false
        } 
       // c.
         var c = 12; 
        if (c++ === 13){ 
        alert("condition 1 is true");    // condition is false
        } 
        if (c === 13){ 
            alert("condition 2 is true");  // condition is true
            } 
            if (++c < 14){ 
            alert("condition 3 is true");  // condition is false
            } 
            if(c === 14){ 
            alert("condition 4 is true");  // condition is true
            }

            //d.
             var materialCost = 20000; 
             var laborCost = 2000; 
             var totalCost = materialCost + laborCost; 
             if (totalCost === laborCost + materialCost){ 
             alert("The cost equals");                           // condition is true

                } 

            //e.
            if (true){ 
            alert("True");  // alert true
            } 
            if (false){ 
            alert("False"); // alert false
             }
            // f. 
             if("car" < "cat"){ 
                alert("car is smaller than cat");  // check majority of charcter which is larger
                } 

                /*chapter 9 11 progarme 6
                 Write a program to take input the marks obtained in three 
                    subjects & total marks. Compute & show the resulting 
                    percentage on your page. Take percentage & compute 
                    grade as per following table:*/

                    // get inout from user
                    var obtainedMarks1 = +prompt("Enter the Marks of computer");
                    var obtainedMarks2 = +prompt("Enter the Marks of urdu");
                    var obtainedMarks3 = +prompt("Enter the Marks of english");
                    var big = obtainedMarks1,obtainedMarks2,obtainedMarks3;
                    // initialize varriable
                    var totalMarks = 300;
                    // get percentage
                    var result = obtainedMarks1 + obtainedMarks2 +obtainedMarks3/totalMarks*100;
                    result.toFixed(2);
                    // get obtained marks
                    var totalMarksObtained =obtainedMarks1 + obtainedMarks2 +obtainedMarks3;
                    // display result
                    document.write("Total Marks"+""+totalMarks+"<br>");
                    document.write("Obtained Marks"+""+totalMarksObtained+"<br>");
                    document.write("percenatge"+" "+result+"<br>");
                    
                    // check condition
                    if(result>=80){
                        document.write("Grade: A-One<br>"+"Remarks:Excellnet");
                    }else if(result>=70){
                        document.write("Grade: A<br>"+"Good");
                    }else if(result>=60){
                        document.write("Grade: B<br>"+"YOu need to Improve");
                    }else if(result<60){
                        document.write("Grade: Fail<br>"+"Sorry");
                    }

                   /*Guess game: 
                    Store a secret number (ranging from 1 to 10) in a variable. 
                    Prompt user to guess the secret number. 
                    a. If user guesses the same number, show “Bingo! Correct 
                    answer”. 
                    b. If the guessed number +1 is the secret number, show 
                    “Close enough to the correct answer”. chapter 9 11 progarme 7 */

                    var guessNumber = 5;
                    var number = +prompt("PLease enter the guess NUmber");
                    if(number===guessNumber){
                        alert("Bingo! Correct answer");
                    }else if(number===+1){
                        alert("Close enough to the correct answer");
                    }else{
                        alert("Not guess number");
                    }
               /*chapter 9 11 programe 8
               Write a program to check whether the given number is 
                divisible by 3. Show the message to the user if the number 
                is divisible by 3.*/

                var num = +prompt("Enter the number");
                if(num%3===0){
                    alert("the number is divisible by 3");
                }else{
                    alert("The number is not divisible by 3");
                }
                /* chapter 9 11 progarme 9
                Write a program that checks whether the given input is an 
                even number or an odd number.*/
                 var num1 = +prompt("Enter the number");
                 if(num1==" "){
                    alert("Please enter the number");
                 }else if(isNaN(num1)){
                    alert("Bhai number enter karo");
                 }else if(num1%2===0){
                    alert("The number is even");
                 }else if(num1%2===1){
                    alert("The number is odd");
                 }else{
                    alert("This is not number");
                 }

            /*chapter 9 11 progarme 10
            Write a program that takes temperature as input and 
            shows a message based on following criteria 
            a. T > 40 then “It is too hot outside.” 
            b. T > 30 then “The Weather today is Normal.” 
            c. T > 20 then “Today’s Weather is cool.” 
            d. T > 10 then “OMG! Today’s weather is so Cool.”*/

            var temperature = +prompt("Enter the temprature");
            if(isNaN(temperature)){
                alert("Please enter the number not a string")
            }else if(temperature==" "){
                alert("please enter the temprature not a empty value");
            } else if(temperature>40){
                alert("It is too hot outside");
            }else if(temperature>30){
                alert("The Weather today is Normal");
            }else if(temperature>20){
                alert("Today’s Weather is cool");
            }else if(temperature>10){
                alert("OMG! Today’s weather is so Cool");
            }else{
                alert("This not temprature");
            }

            /* chapter 9 11 programe 11
            Write a program to create a calculator for +,-,*, / & % 
            using if statements. Take the following input: 
            a. First number 
            b. Second number 
            c. Operation (+, -, *, /, %) 
            Compute & show the calculated result to user.*/

            var userInput1 = +parseFloat(prompt("Please enter the number1"));
            var oper = prompt("Please enter the operator");
            var userInput2 = +parseFloat(prompt("Enter the number2"));
            if(isNaN(userInput1,oper,userInput2)){
                alert("PLease enter the number not a string")
            }else if(oper !="+" && oper !="*"&&oper !="/"&&oper != "-" &&oper!="%"){
                alert("Please correct operation performs like + - / * %");
            }else if(oper==="+"){
                alert(userInput1+userInput2);
            }else if(oper==="-"){
                alert(userInput1-userInput2);
            }else if(oper==="*"){
                alert(userInput1*userInput2);
            }else if(oper==="/"){
                alert(userInput1/userInput2);
            }else if(oper==="%"){
                alert(userInput1&userInput2);
            }else{
                alert("not a number");
            }
