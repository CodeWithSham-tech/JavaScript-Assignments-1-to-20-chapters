// let size  = +prompt("Enter the number of rows");      
// var  midle =(size+1)/2;
// if(size!=" " && !isNaN(size)){
// for( let i=1; i <= midle;i++){
//     for(let s=1; s<=(midle-i);s++){
//         document.write("&nbsp&nbsp&nbsp");
//     }
//     for(let j=1; j<=2*i-1;j++){
//         document.write("*&nbsp");
//     }
//     document.write("<br>");
// }
// for(let p=1;p<=(midle-1);p++){
//     for(let space=1;space<=p;space++){
//         document.write("&nbsp&nbsp&nbsp");
//     }
//     for(let q=1; q<=2*(midle-p)-1;q++){
//         document.write("*&nbsp");
//     }
//     document.write("<br>");
// }
// }else{
//     document.write("Please Enter the number"+" "+"or enter the even number");
// }

// write a javascript programe to print palindrome word.

    // var word = prompt("Enter the word");
    // var check="";
    // for(let i = word.length-1;i>=0;i--){
    //   check += word[i];
     
    // }
    // if(check===word){
    //     document.write(word+" "+ "is palindrome word");
    // }else{
    //     document.write(word+" "+"is not panlindrome word");
    // }

    // write a programe printable 1 -100 char counter
       
        // for(var i =1; i<=100;i=i+10){
        //     for(var b=i;b<i+10;b++){
        //         document.write(b+" ");
        //         }
        //         document.write("<br>")
        //         }

    //how to check double space on text and paragraph as wELL AS FROM USER INPUT STRING

            var input = prompt("Enter the character");
            // var input ="kind  ly"
            for(var i=0;i<input.length;i++){
            
                if(input.slice(i,i+2)==="  "){
                    alert("Double sapce are found");
                }
                break;
            }
            // replace word from loop
    //    var text = "The New new Yorker magazine Yorker doesn t allow the phrase World War II They say it should be the Second World War So lets search the following sentence Yorker for the banned characters and replace them with the phrase that the New  prefers"; 
    //     for (var i = 0; i < text.length; i++) {
    //         if (text.slice(i, i + 12) === "World War II") {
    //         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);   
    //           }
    //         }
                //replace word from indexOf method

            // var indexNum = text.indexOf("World War II");
            // var firstchar = text.slice(0,indexNum);
            // var replacing ="the Second World War";
            // var thirdchar = text.slice(indexNum+12);
            // document.write(firstchar + replacing +thirdchar);

            //replace word from replace method

        // var replaceword = "this is my book,this is my book";
        // var replaceword=replaceword.replace("/book/g","pen");
        // document.write(replaceword);

        //programe string letter from index 

        // var namefr = "sham";
        // var firstchar = namefr.charAt(0);
        // document.write(firstchar);

        // var num = Math.random() *2;
        // var round = Math.round(num);
        // console.log(round);

        // var headuser = prompt("Enter the user Name");
        // var tailuser = prompt("Enter the user Name");

        // var toss = Math.random() *2 ;
        // var num = Math.floor(toss);
        // if(headuser=="" || tailuser==""){
        //     alert("please enter the user name")
        // }
        //  else if(num === 1){
        //     alert(headuser+" "+"is won the toss");
        // }else{
        //     alert(tailuser+" "+"is won the toos");
        // }

        //lecture 14
    //     var thedayNames = ["sun","Mon","Thu","Wed","Thrusday","Friday","Saturday"];
    //     // get date using date function
    // var date = new Date();
    // //convert date into string
    // var stringValue = date.toString();
    // // string copy using slice method
    // var copy = stringValue.slice(0,3);
    // var theDay = date.getDay();
    // var dayName = thedayNames[theDay];
    // var daymonth = date.getMonth();
    // var monthYear = date.getFullYear();
    // var hour = date.getHours()
    // console.log(theDay+" "+dayName+" "+daymonth+" "+monthYear+" "+hour);

    // user input get the date of birth
    function calculateAge(){
    var dob = new Date(prompt("Enter the DOB","Dec 10,1970"));
    var dobMilli = dob.getTime();
    var currentDate = new Date();
    var currentDateMilli = currentDate.getTime();
    var diff = currentDateMilli - dobMilli;
    var convertYear = diff/(1000*60*60*24*12*30);
    var accurateAge = Math.floor(convertYear);
    console.log(accurateAge);    
}
    calculateAge();


        
    
