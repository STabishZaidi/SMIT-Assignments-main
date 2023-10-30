// Option 1

// function validatePassword() {
//     var password = prompt("Enter a password:");

//     // Check if the password contains alphabets and numbers
//     var hasAlphabets = /[a-zA-Z]/.test(password);
//     var hasNumbers = /[0-9]/.test(password);

//     // Check if the password doesn't start with a number
//     var startsWithNumber = /^[0-9]/.test(password);

//     // Check if the password is at least 6 characters long
//     var isLengthValid = password.length >= 6;

//     if (hasAlphabets && hasNumbers && !startsWithNumber && isLengthValid) {
//         alert("Password is valid.");
//     } else {
//         alert("Password is not valid. Please try again.");
//         validatePassword(); // Recursive call to validate a new password
//     }
// }
// // Call the password validation function
// validatePassword();



// OPtion 2

// function validatePassword() {
//     var password = prompt("Enter a password:");

//     // Check if the password meets the requirements
//     if (password.length >= 6 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password) && !/^[0-9]/.test(password)) {
//         alert("Password is valid.");
//     } else {
//         alert("Password is not valid. Please try again.");
//         validatePassword(); // Recursive call to validate a new password
//     }
// }

// // Call the password validation function
// validatePassword();



// function generateRandomPassword() {
//     var length = 10;
//     var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

//     var password = "";
//     for (var i = 0; i < length; i++) {
//         var randomIndex = Math.floor(Math.random() * charset.length);
//         password += charset.charAt(randomIndex);
//     }

//     return password;
// }

// var randomPassword = generateRandomPassword();
// console.log("Random Password: " + randomPassword);




/* 09-Sept-2023 */
// 




// find duplicate values of an arry without method (splice)

// var arr =["syed","tabish","mazhar","ali","sanaullah","tabish","ali"];
// for (var i=0, i <arr.length, i++){
// for (var j=0, j <arr.length, j++){
// if(var [i] === var[j]);
// }
// console.log(j)
// }




















// remove duplicate values (nested loop)


// var arr = ["ghous","zain","ghous","ali","khan","ali", "ali", "mazhar", "mazhar"];
// var uniqueArr = [];

// for (var i = 0; i < arr.length; i++) {
//   var isDuplicate = false;
  
//   for (var j = 0; j < uniqueArr.length; j++) {
//     if (arr[i] === uniqueArr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }
  
//   if (!isDuplicate) {
//     uniqueArr.push(arr[i]);
//   }
// }

// console.log(uniqueArr);



// Solution 2

var arr = ["ghous","zain","ghous","ali","khan","ali", "ali", "mazhar", "mazhar"];
for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){
        if |(arr[i] === arr[j] && i !== j){
            arr.splice(j,1);
        }
    }
}
console.log(arr)

// Solution 3

// var arr = ["ghous","zain","ghous","ali","khan","ali", "ali", "mazhar", "mazhar"];
// for (var i = 0; i < arr.length; i++){
//     for (var j = 1 + 1; j < arr.length; j++){
//         if |(arr[i] === arr[j] ){
//             arr.splice(j,1);
//             j = j - 1
//         }
//     }
// }
// console.log(arr)





function abc(){
    var test = document.getElementById("test")
    test.value = "ghous"
    console.log(test)
}
