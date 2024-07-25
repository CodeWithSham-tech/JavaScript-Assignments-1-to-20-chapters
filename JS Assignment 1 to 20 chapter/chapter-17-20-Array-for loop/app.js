// Declare and initialize an empty multidimensional array. 
// (Array of arrays) 
// let multidiminsionarray = [[[]]];

// Declare and initialize a multidimensional array 
// representing the following matrix:  

//  let multidimensional = [[0,1,2,3],[1,0,12],[2,1,0,1]];

// for(let i =0; i<multidimensional.length;i++){
//     document.write(multidimensional[i]+"<br>");
// }



// Write a program to print numeric counting from 1 to 10.  

// for (let i = 1; i<=10;i++){
//     document.write(i+"<br>");
// }

// Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

    // let table = +prompt("enter the table number");

    // let tableLength = +prompt("Enter the lenght");

   
    // if(table=="" && tableLength==""){
    //     document.write("PLease enter the table number or table Length");
    // }else if(isNaN (table) && isNaN(tableLength)){
    //         document.write("Please enter the numric value");
    // }else{
    //     document.write("multiplication of table"+" "+table+"<br>"+"Lenghth of table"+"="+tableLength+"<br>");
    // }
    // for (let i =1; i<=tableLength; i++){
    //     if(i===15){
    //          break;
    //      }
    //     document.write(table+"*"+i+"="+table*i+"<br>");
    // }

//     Write a program to print items of the following array 
// using for loop: 

// let fruits = ["apple", "banana", "mango", "orange","strawberry"];

// for(let i =0; i<fruits.length;i++){
//     document.write(fruits[i]+"<br>");
// }   
// for(let x =0; x<fruits.length;x++){
//     document.write("Elemnt at index of"+" "+[x]+" "+fruits[x]+"<br>");

// }

// Generate the following series in your browser. See 
// example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
    //     let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    //     "<h3>"+document.write("Counting"+"<br>");"</h3>"
    // for (let i = 0; i<counting.length;i++){   
    //     document.write(counting[i]+" ");
    // }

    // let reverse = [1,2,3,4,5,6,7,8,9,10];
    
    // "<h3>"+document.write("Reverse"+"<br>");"</h3>"
    // let reverse2 = reverse.toReversed();
    // for(let x =0;x<reverse.length;x++){
    //     document.write(reverse2[x]+" ");
    // }

    // let even = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
    
    // "<h3>"+document.write("EVEN"+"<br>");"</h3>"

    // for(let y =0;y<even.length;y++){
    //     if(y%2===0){
    //     document.write(even[y]+" ");
    //     }
    // }

    // let odd = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
    // "<h3>"+document.write("ODD"+"<br>");"</h3>"
    // for(let z =0 ; z<odd.length;z++){
    //     if(z%2===1){
    //         document.write(odd[z]+" ");
    //     }
    // }

//  let series = [2,4,6,8,10,12,14,16,18,20];
//  "<h3>"+document.write("Series"+"<br>");"</h3>"
//  for(let a =0 ; a<series.length;a++){
    
//      document.write(series[a]+"k"+" ");
       
//     }

// You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example:

let user = prompt("Welcome to ABC Bakry. What do you want to order sir/Madam");
    
   let firstchar = user.slice(0,1);
   let otherchar = user.slice(1);

   firstchar = firstchar.toUpperCase();
   otherchar=otherchar.toLowerCase();

   user = firstchar + otherchar;

let search = ["Cake","Apple Pie","Cookie","Chips","Patties","Coke09","Cream 12"];
let index = search.indexOf(user);
if(user==""){
   
    document.write (prompt("Please enter the item"+" "+"Welcome to ABC Bakry. What do you want to order sir/Madam"));
    document.write("Please enter the item");
}else if(search.includes(user) && (index!==-1)){
    document.write("<b>"+user+"</b>"+" "+"is"+" "+"<b>"+"availble"+"</b>"+" "+"at index of"+" "+index+" in our bakry");
 }else{
    document.write("we are sorry!"+" "+user+" "+"is not availble in our bakry");
}
 
// Write a program to identify the largest number in the 
// given array. 

//   arr = [24, 53, 78, 91, 12];
 //  i set array 0 index value on largest
            // current value > largest
        // largest=current value
//  let largest = arr[0];

//   for(let i = 0; i<=arr.length;i++){
//       if(arr[i]>largest){
    
         
//         largest = arr[i];
//       }
//   }
//     document.write("The largest value of array is"+" "+"<b style=color:red>"+largest+"<b>");

// Write a program to identify the smallest number in the 
// given array

// arr = [24, 53, 78, 91, 12];
//     let smallest = arr[0];
//     for(let i = 0;i<=arr.length;i++){
//         if(arr[i]<smallest){
//             smallest = arr[i];
//         }
//     }
//     document.write("The smallest number of array"+" "+"<b style=color:red>"+smallest+"<b>");

// Write a program to print multiples of 5 ranging 1 to 
// 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i+" ");
// }
// }







  

  

    

   



    


