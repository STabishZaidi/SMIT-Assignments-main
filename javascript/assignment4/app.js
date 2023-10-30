// ***************Chapter-17 to 20 [Arrays] ****************

//  *******Q-1 Declare and initialize an empty multidimensional array.
// (Array of arrays)******** 

// var arr = [];



 /* *******Q-2. Declare and initialize a multidimensional array
 representing the following matrix: (0 1 2 3) , (1 0 1 2) , (2 1 0 1) ******** */

// var matrix = [
//     [0, 1, 2, 3 ],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];





/* *******Q-3. Write a program to print numeric counting from 1 to 10.******** */


// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }


/* *******Q-4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user. ******** */

// var table = prompt("Enter a number to show its multiplication table");
// var length = prompt("Enter the length of the multiplication table");
// if (!isNaN(table) && !isNaN(length)) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(table + " x " + i + " = " + (table * i));
//     }
// } else {
//     console.log("Invalid input. Please enter valid numbers.");
// }


/* *******Q-5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]  ******** */

// var fruits = ["apple", "banana", "mango",  "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

/* *******Q-6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k  ******** */


// var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// var series = ["2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k"];

// document.write("<h2>" + "Counting :" + "<br>" + "</h2>" + counting + "<br>" + "<h2>" +
// "Reverse Countingc:" + "<br>" + "</h2>" + reverseCounting + "<br>" + "<h2>" +
// "Even :" + "<br>" + "</h2>" + even + "<br>" + "<h2>" + "Odd :" + "<br>" + "</h2>" + odd + "<br>" + "<h2>" +
// "Series :" + "<br>" + "</h2>" + series )


/* *******Q7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not.  ******** */

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput =prompt("wellcome to ABC Bakery. What do you want to order sir/ma'am ");
// userInput = userInput.toLowerCase();
// var matchFound =false;
// var index = -1;
// for (var i=0; i<A.length; i++){
//     var currentItem = A[i].toLowerCase();
//     if (currentItem === userInput){
//         found = true;
//         index = i;
//         break;
//     }
// }
// if (found){
//     alert ("The item you entered is available at index number " + index + " in our bakery.");
// } else{
//     alert("No, the item is not found in the list.");
// }


/* *******Q-8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12]. ******** */

// var A = [24, 53, 78, 91, 12];
// var largest= A[0];

// for (var i = 0; i < A.length; i++) {
//     if (A[i] > largest ) {
//       largest = A[i];
//     }
//   }
//   console.log(largest);


/* *******Q-9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]  ******** */

// var A = [24, 53, 78, 91, 12];
// var smallest= A[0];

// for (var i = 0; i < A.length; i++) {
//     if (A[i] < smallest ) {
//       largest = A[i];
//     }
//   }
//   console.log(smallest);


/* *******Q-10. Write a program to print multiples of 5 ranging 1 to
100. ********  */
// var num = [5]
// for (var i = 1; i <= 20; i++) {
//         // if (i % 5 === 0) {
//         // console.log(i);     }
//         document.write(num*i)
//         }
       

// Chapter  21 to 25 (String Method)
/* ** Q-1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name. */

var firstName = prompt("Enter your First name");
var lastName = prompt("Enter Your Last name");
var fullName = firstName + " " + lastName;

document.write ("Hello" , fullName)

/* Q2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */

var input = prompt("enter your favorite mobile phone model")

document.write (input.length)

/* Q3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser  */

var country ="Pakistani";

document.write ( "index of n " , "is", country.indexOf("n"))


/* Q4-Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser */

var letter ="Hello World";
document.write ("last index of letter “l” ", "is", " " , letter.lastIndexOf("l"))


/* Q5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.*/
 
var country = "Pakistani";
document.write ("character at 3rd index", country.indexOf ("3"))