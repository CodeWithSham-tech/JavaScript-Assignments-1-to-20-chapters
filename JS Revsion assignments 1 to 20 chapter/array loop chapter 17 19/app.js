//chapter 17 19 progarame 1
// Declare and initialize an empty multidimensional array. 

// (Array of arrays) 

let multidimensional = [[[]]];

// chapter 17 19 progarme 2
// Declare and initialize a multidimensional array 
// representing the following matrix: 

//Initialize multidimesional Array

let multi = [[0,1,2,3],[1,0,12],[2,1,0,1]];

for(var i =0;i<multi.length;i++){

    // display data without qoma using join method

    document.write(multi[i].join(' ')+"<br>");
}

/*chapter 17 progarme 3
Write a program to print numeric counting from 1 to 10. */

for(var i= 1; i<=10;i++){
    document.write(i+"<br>");
}

/* chapter 17 progarme 4
Write a program to print items of the following array 
using for loop:*/

    //create array

 let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
 for(var i=0;i<fruits.length;i++){
   document.write(fruits[i]+"<br>");
 }
        // elements index position

 for(var j=0;j<fruits.length;j++){
    document.write("Element at index of:"+j+" "+fruits[j]+"<br>");
 }

 /*chapter 17 progarme 5
  Generate the following series in your browser. See 
example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */

// array create
var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for(var i=0;i<counting.length;i++){
    document.write(counting[i]+"<br>");
}
// reverse array create
var reverseCounting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // reverse1 have reverse array
    let reverse1 = reverseCounting.toReversed();
    for(var k=0;k<reverseCounting.length;k++){
    document.write(reverse1[k]+"<br>");
}
    // array create 
let even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
    for(let y =0;y<even.length;y++){
        // check condition number is even or odd
        if(y%2===0){
        document.write(y+" "+"<br>");
        }
    }
     // create array
    let odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
        for(let y =0;y<odd.length;y++){
            // check condition number is odd or even
        if(y%2===1){
        document.write(y+" "+"<br>");
        }
    }
    // create array
    let series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
    for(let y=1;y<series.length;y++){
        //check condition number is even or odd
        if(y%2===0){
            // display data serires type
            document.write(y+" "+"k"+"<br>");
        }
    }

  // chapter 17 -19 program 7
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example:

//get input from user
 var userINput = prompt("Welcome to ABC bakrey, What do you want to order sir/ma'am");
 // ist charcter is large using slice
 let firstchar = userINput.slice(0,1);
 //other charcters is small using slice
 let otherchar = userINput.slice(1);
     
 firstchar = firstchar.toUpperCase();
 otherchar=otherchar.toLowerCase();

   //user input concatination
 userINput = firstchar + otherchar;

// create array
var a = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
 for(var i=0;i<userINput.length;i++){
    // check space 
    if(userINput.slice(i,i+2)==="  "){
        alert("double space are not elible");
        
    }
 }
  // get index
 var index  = a.indexOf(userINput);
  //check user input is empty or check userinput not number
 if(userINput=="" || !isNaN(userINput)){
    alert("please enter the item name");
 }
  // check array give input from user
else if(a.includes(userINput)){
    alert(userINput+" "+"is available at index"+" "+index+" "+"in our bakrey");
}else{
    alert("we are sorry."+" "+userINput+" "+"is not availbe in our bakrey");
}

/*Chapter 17 19 programe 8
 Write a program to identify the largest number in the 
given array. */

// create array
var arrayItem = [24, 53, 78, 91, 12];
  // set largest value will be 0 index
 var largest = arrayItem[0];

  for(var i=0;i<arrayItem.length;i++){
     // then currentValue > largest
    if(arrayItem[i]>largest){
         //then largest value = current value
        largest = arrayItem[i];
       
    }
  }
  document.write("The largest value of array is"+" "+"<b style=color:red>"+largest+"<b>"+"<br>");

//   chapter 17 19 progarme 9
// Write a program to identify the smallest number in the 
// given array. 

// create array

arrayitem2 = [24, 53, 78, 91, 12];

// set smallest value will be 0 index
var smallest = arrayitem2[0];

for(var i=0;i<arrayitem2.length;i++){

   // then currentValue < largest

    if(arrayitem2[i]<smallest){

        // smallest =current value

        smallest = arrayitem2[i];
    }
}
document.write("The largest value of array is"+" "+"<b style=color:red>"+smallest+"<b>"+"<br>");

//chapter 17 19 progarme 10

// Write a program to print multiples of 5 ranging 1 to 
// 100.

 for(i=1;i<=100;i++){
     // cehck condition 

    if(i%5===0){
        
        document.write(i);
    }
 }