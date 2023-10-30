// ***************Chapter-14 to 16 [Arrays] ****************

// *******Q .1********

var myArray = [" "];
console.log(myArray)


// *********Q .02*********

var myArray = ["tabish"];
myArray.pop()
console.log(myArray)

// ********Q .03********

var classStudent = ["tabish", "imran", "mazhar"]
console.log(classStudent)


// ********Q .04*********

var numberArray = ["1", "2", "3", "4", "5"];
console.log(numberArray)

// ********Q .05*********

var booleanArray = ["syed", "tabish", "hussain"];
console.log(booleanArray[0])


// *******Q .06********

var mixedArray = ["syed", "tabish", 1, 2];
console.log(mixedArray)


// *******Q .07*******


var qualification = [("<h3>" + "1) SSC" + "<br>" +
  "2) HSC" + "<br>" + "3) BCS" + "<br>" + "4) BSC" + "<br>" + "5) BCOM" + "<br>" + "6) MS" + "<br>" + "7) M.phil" + "<br>" +
  "8) Phd" + "</h3>")]
document.write("<h1>" + "Qualification :" + "</h1>" + "<br>" +
  "<br>" +
  "<h3>" + qualification)


// ********Q .08*******

var studentName = ["Michael", "John", "Tony"];
var studentScore = [320, 230, 480];
document.write("<h3>" + "Score of " + (studentName[0]) + " is " + (studentScore[0]) + " and  Percentage is 64%..." +
  "<br>" + "Score of " + (studentName[1]) + " is " + (studentScore[1]) + " and  Percentage is 46%..." + "<br>" +
  "Score of " + (studentName[2]) + " is " + (studentScore[2]) + " and  Percentage is 96%..." + "</h3>")


// *******Q .09********

// (a)

var colorNames = ["Red", "Yellow", "Green"];
var newColor = prompt("Enter any color name here");
var addColor = colorNames.unshift(newColor);
document.write(colorNames)

//  (b)   

var colorNames = ["Red", "Yellow", "Green"];
var newColor = prompt("Enter any color name here");
var addColor = colorNames.push(newColor);
document.write(colorNames)

// (c)

var colorNames = ["Red", "Yellow", "Green"];
var newColors = prompt("Enter any color name here");
var addColor = colorNames.unshift(newColors);
document.write(colorNames)

// (d)

var colorNames = ["Red", "Yellow", "Green"];
var firstColor = colorNames.shift()
document.write(colorNames)

// (e)

var colorNames = ["Red", "Yellow", "Green"];
var addColor = colorNames.pop(colorNames);
document.write(colorNames)

// (f)

var colorNames = ["Red", "Yellow", "Green"];
var addColor = colorNames.splice(1, 0, "Blue");
document.write(colorNames)

// (g)

var colorNames = ["Red", "Yellow", "Green"];
var addColor = colorNames.splice(1, 1, "Blue");
document.write(colorNames)


// ********Q .10*******

var studentScore = [320, 230, 480, 120];
var orderStore = studentScore.sort();
document.write(studentScore)


// *******Q .11********

var citiesName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var copyArr = citiesName.slice(2, 4);

document.write("<h3>" + "Cities List" + "<br>" + citiesName + "<br>" + "<br>" +
  "Selected Cities List" + "<br>" + copyArr + "</h3>")


// *******Q .12******

var a = ["This", "is", "my", "cat"];
var b = a.join(" ");
document.write("<h2>" + "Array:" + "<br>" + a + "<br>" + "<br>" + "String:" + "<br>" + b)


// ******Q .13******

var array = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Mouse", "Printer", "Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)



var array = ["Printer", "Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)



var array = ["Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.shift();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


// ******Q .14******



var array = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Keyboard", "Mouse", "Printer"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Keyboard", "Mouse",];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


var array = ["Keyboard"];
document.write("<h3>" + "Devices" + "<br>" + array + "</h3>")
var newArray = array.pop();
document.write("<h3>" + "<br>" + "Out :" + "<br>" + newArray)


// ******Q .15******


var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var selectHTML = "<select id='manufacturerSelect'>";

for (var i = 0; i < manufacturers.length; i++) {
  selectHTML += `<option value='${manufacturers[i]}'>${manufacturers[i]}</option>`;
}

selectHTML += "</select>";

document.write(selectHTML);
