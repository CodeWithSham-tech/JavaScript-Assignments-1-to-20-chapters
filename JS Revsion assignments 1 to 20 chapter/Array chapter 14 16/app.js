/*chapter 14 16
1
Declare an empty array using JS literal notation to store 
student names in future.*/

// declare empty array Literal Notation

var studentNames = [];

/*2
Declare an empty array using JS object notation to store 
student names in future.*/

// declare empty array object Notation

var studentNames = [];

/*3
Declare and initialize a strings array.*/

// create string array

var stringArray = ["Sham","ALi","Umer","Hashir"];

// access all array
alert(stringArray);

/*4
 Declare and initialize a numbers array.*/

// create number array
 var numberArray = [10,20,30,40];

 //access all array
 alert(numberArray);

 /*5
  Declare and initialize a boolean array*/

  // create boolean array

  var booleanArray = [true,false];

  //access all array
  alert(booleanArray);

  /*6
  Declare and initialize a mixed array. */
    // create mixed array
  var mixedArray = [10,20,false,"ali",30,"bin",false];
    // access all aray
  alert(mixedArray);

/*7 
Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like: */

// create a array

var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// loop run till array length

for(i=0;i<education.length;i++){

    //display data 

    document.write(i+1+")"+education[i]+"<br>");
}

/*8 Write a program to store 3 student names in an array.Take 
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like: */

// create array to store students Names

var studentsName=["Ehtsiham","Ali","akbar"];

// create another array to store marks

var score = [300,350,400];

// initailize varriable

var totalMarks = 500;

// for loop get index from studentsName array and get index score array
// loop run studentName or score li length tak

for(i=0;i<studentsName.length;i++){
    document.write("Score of"+" "+studentsName[i]+
        " "+"is"+" "+score[i]+" "+"Percentage"+
        " "+score[i]/totalMarks*100+"%"+"<br>");
    }
/*9
Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort 
method. */

// create array

var scoreofStudents = [320,230,480,120];

 // display data in array sequance
document.write("score of studenst"+" "+scoreofStudents+"<br>")

// display data in reverse 
document.write("orders scores of studenst"+" "+scoreofStudents.reverse()+"<br>");

/*10
Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array.*/

//create array city name
// islamabad and quetta is copy from city array

var city = ["karachi","Lahore","islamabad","Quetta","Peshawar"];

document.write("Selected cities"+" "+city.slice(2,4)+"<br>");

/*11
 Write a program to create a single string from the 
below mentioned array: */

// create array in some string

var arr = ["This","is","my","cat"];

// without string using join method

document.write(arr.join(' ')+"<br>");
 /* 12
    Create a new array. Store values one by one in such a way 
    that you can access the values in the order in which they 
    were stored. (FIFO-First In First Out)*/
      //create a empty array
    var array0 = [];
      // loop run till 0 because data add on array in one time
    for(var j=0; j<=0;j++){
        array0.unshift("Devices"+"<br>"+"keyboard","muose","wire","monitor","laptop");
    } 
    // display data out side the loop because data show in time 
    document.write(array0+"<br>");

    // second loop data out in first index using unshift method
    for(var i=0;i<array0.unshift();i++){
      document.write("out"+"<br>"+array0.shift()+"<br>");
    }
    /* Create a new array. Store values one by one in such a way 
      that you can access the values in reverse order. (Last In
      First Out)*/

      // create a empty array

    var LIFO = [];

    // loop run till 0 because data add on array in one time

     for(var t=0;t<=0;t++){
            // data add in last index
         LIFO.push("Keyboard","Mouse","Printer","Moniter");
     }
      // display data out side the loop because data show in time 
     document.write("Devices"+"<br> "+LIFO);

     // array reverse
     let rever = LIFO.reverse();
      // loop run in till rever length
     for(let i = 0; i<rever.length; i++){
         document.write("out"+"<br>"+rever[i]+"<br>");
     }

/*14
Write a program to store phone manufacturers (Apple, 
Samsung, Motorola, Nokia, Sony & Haier) in an array. 
Display the following dropdown/select menu in your 
browser using document.write() method:*/

// create array mobile company
var manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

// loop

 for(var i =0;i<manufacturers.length;i++){
    // create dropdown using array
        document.write("<select name=manufacturers>"+
            "<option>"+manufacturers[i]+"</option")
            
 }
      document.write("</select>");
   

   
    
