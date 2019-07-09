// 1. Write a function that determines if a string starts with an upper-case letter A-Z

// console.log('A' === 'a');





// const isCapitalised = function (string) {
//   const upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//
//   return upperCaseAlphabet.includes(string[0]);
// }
//
// console.log(isCapitalised("Test"));
// console.log(isCapitalised("test"));
// console.log(isCapitalised(""));
// console.log(isCapitalised(0));

// const isCapitalisedImproved = function (string) {
//   return string[0] === string[0].toUpperCase();
// }
//
// console.log(isCapitalisedImproved("Test"));
// console.log(isCapitalisedImproved("test"));
// console.log(isCapitalisedImproved(""));
// console.log(isCapitalisedImproved(0));

// 2. Write a function that determines the area of a circle given the radius
//
// const circleArea = function (radius) {
//   return Math.PI * radius * radius;
// }
//
// console.log(circleArea(1));
// console.log(circleArea(2));
// console.log(circleArea(10));

// 3. Add up all the values in an integer array

// const sumInts = function (array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result += array[i];
//   }
//   return result;
// }
//
// console.log(sumInts([1, 2, 3, 4]));
// console.log(sumInts([1, -2, 3, -4]));
// console.log(sumInts([1, "test", 3, -4]));

// 5. A file has an integer on each line. Write a program to add up the integers.

const fs = require('fs');
const readLine = require('readline');

// const lineReader = readLine.createInterface({
//   input: fs.createReadStream('testFile.js')
// })
//
// lineReader.on('line', (line) => {
//   console.log(line[0]);
// })

const sumLineInts = function (filename) {
  const lineReader = readLine.createInterface({
    input: fs.createReadStream(filename)
  })


  let result = 0;
  lineReader.on('line', (line) => {
    // console.log(line[0]);
    // console.log(result + line[0]);
    result += parseInt(line[0]);
  });


  lineReader.on('close', function () {
    console.log(result);
    return result;
  })

  // lineReader.close();
}


// console.log(sumLineInts("testFile.js"));
sumLineInts("testFile.js");
