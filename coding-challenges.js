// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]

const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
     // While there remain elements to shuffle...
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      // shift the first value and then randomize the array
      array.shift()
      if (array.length === 0){
        return "empty"
      } else if (array.length > 0){
          return array
      } else {
          return "please input a valid array"
      }
  }

// console.log(shuffle(collections))
// console.log(shuffle(collections))
// console.log(shuffle(collections))
// console.log(shuffle(collections))
// console.log(shuffle(collections))
// console.log(shuffle(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cubeSum = arr => {
    const mapArr = arr.map(value => Math.pow(value, 3))
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return mapArr.reduce(reducer)
}
// console.log(cubeSum(cubeAndSum1))
// console.log(cubeSum(cubeAndSum2))


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minMaxFinder = array => {
    newArr = []
    newArr.push(Math.max(...array))
    newArr.unshift(Math.min(...array))
    return newArr
}
// console.log(minMaxFinder(nums1))
// console.log(minMaxFinder(nums2))

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const firstLetterUppercase = (str) => {
    var newString = "";
    for (i=0; i < str.length; i++) {
       newString += i % 2 == 0 ? str.charAt(i).toUpperCase() : str.charAt(i);
    }
    return newString;  
  }

// console.log(firstLetterUppercase(testString1))
// console.log(firstLetterUppercase(testString2))

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]

const noDupes = (arr1, arr2) =>{

    const dupesArray = [...arr1, ...arr2]
    var uniqueItems = Array.from(new Set(dupesArray))
    return uniqueItems
    
    }

// console.log(noDupes(testArr1, testArr2)) 
