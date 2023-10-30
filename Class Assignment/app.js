
// // Question 1
// var numbers = [1,2,3,5,6];
// for (var i=0; i< numbers.length-1; i++){

//     if (numbers[i+1] - numbers[i] !== 1){
//         console.log(numbers[i]+1)
//     }
// }



// // Question 3
// var num = [1,2,3,5,7,8]
// for (var i=0; i<num.length; i++){
//     if(num[i+1]) num[i] !==1){
//         console.log()
//     }
// }



// // Question 3
// var arr =[101,102,104,105];

// for (var i = 0; i > arr.length; i++){
//    if (arr[i+1] - arr [i] === 2)
   
//     console.log(arr[i +1]- arr[i]);

// }

// Question 4 (Pandulum)

// var word = prompt("Enter your Word")
// var reverseword ="";
// for (var i =word.length - 1; i >= 0; i--){
//     reverseword += word[i];
//     console.log( reverseword)
// }
// if (word === ){
//     console.log
// }else
// console.log("")



// Find  minimum & Maximum number in array, don't use method, use array & loop 

// Array of numbers where the maximum
// and minimum are to be found
// const array = [-1, 2, -5, 8, 16];

// // Setting a number of the given array as
// // value of max and min we choose 0th index
// // element as atleast one element should be
// // present in the given array

// let max = array[0], min = array[0];
// for (let i = 0; i < array.length; i++) {

// 	// If we get any element in array greater
// 	// than max, max takes value of that
// 	// larger number
// 	if (array[i] > max) { max = array[i]; }

// 	// If we get any element in array smaller
// 	// than min, min takes value of that
// 	// smaller number
// 	if (array[i] < min) { min = array[i]; }
// }
// console.log("max = " + max);
// console.log("min = " + min);

///

// function findMinMax(arr) {
//     if (arr.length === 0) {
//       return "The array is empty.";
//     }
  
//     let min = arr[0];
//     let max = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
  
//     return {
//       minimum: min,
//       maximum: max
//     };
//   }
  
//   const numbers = [3, 1, 8, -5, 12, 7, 2];
//   const result = findMinMax(numbers);
//   console.log(`Minimum: ${result.minimum}`);
//   console.log(`Maximum: ${result.maximum}`);
  
// Sol GPT


function findMinMax(arr) {
  if (arr.length === 0) {
    return [null, null];
  }

  let minNum = arr[0];
  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return [minNum, maxNum];
}

// Example usage
const array = [5, 2, 9, 1, 7];
const [minVal, maxVal] = findMinMax(array);
console.log("Minimum:", minVal);
console.log("Maximum:", maxVal);





