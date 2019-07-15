// Palindrome Application

function palindromes(string) {
    let index = 0
    let answer = ""
    for(let i = string.length - 1; i >= 0; i--) {
        if(string[index].toLowerCase() != string[i].toLowerCase()) {
            answer = "Not a Palindrome!"
            return answer
        } else {
            answer = "Is a Palindrome!"
        }
        index++
    }
    return answer
}

// Realized there was an easier solution with the reverse function
function palindromes2(string) {
  let reverseString = string.reverse()
  for(let i = 0; i < string.length; i++) {
    if(reverseString[i].toLowerCase() != string[i].toLowerCase()) {
      return "Not a Palindrome!"
    }
  }
  return "Is a Palindrome!"
}

// Realized there was an even easier solution with the localecompare function
function palindrome3(string) {
  let solution = string.localeCompare(string.reverse())
  if(solution == 0) {
    return "Is a Palindrome!"
  } else {
    "Not a Palindrome"
  }
}

console.log(palindromes("Lol"))

// Duplicate Remover

// without includes
function duplicateRemover(anArray) {
  let newArray = []
  for(let i = 0; i < anArray.length; i++) {
      if(!doesItExist(newArray, anArray[i])) {
        newArray.push(anArray[i])
      }
  }
return newArray
}

function doesItExist(someArray, item) {
let truth = false
for(let i = 0; i < someArray.length; i++) {
  if(item == someArray[i]) {
    truth = true
  }
}
return truth
}

console.log(duplicateRemover(["Mary", "John", "Steve", "Sarah", "Mary", "John", "Steve", "Clara", "Mary", "Tim", "Ben", "Billy", "Mary"]))

// with includes
function duplicateRemover(anArray) {
    let newArray = []
    for(let i = 0; i < anArray.length; i++) {
  	    if(!newArray.includes(anArray[i])) {
        	newArray.push(anArray[i])
        }
    }
  return newArray
}

console.log(duplicateRemover(["Mary", "John", "Steve", "Sarah", "Mary", "John", "Steve", "Clara", "Mary", "Tim", "Ben", "Billy", "Mary"]))

// Does the item exist in the array?

names = ["Mary", "John", "Steve", "Sarah", "Clara", "Tim", "Ben", "Billy"]

function areTheyInThere(item) {
	if(names.includes(item)) {
  	return true
  } else {
  	return false
  }
}

console.log(areTheyInThere("John"))
console.log(areTheyInThere("Kelsey"))

// Find the Largest Number

let numbers = [1, 7, 3, 90, 34, 22, 17, 28, 44, 22, 4, 2, 207, -400]

function findLargestNumber(nums) {
	let biggestNumber = 0
	for(let i = 0; i < nums.length; i++) {
  	if(i === 0) {
    	biggestNumber = nums[i]
    } else {
    	if(biggestNumber < nums[i]) {
      	biggestNumber = nums[i]
      }
    }
  }
  return biggestNumber
}

console.log(findLargestNumber(numbers))

// Found the short-hand 
console.log(Math.max.apply(null, numbers))

// Find the Smallest Number

function findSmallestNumber(nums) {
	let smallestNumber = 0
	for(let i = 0; i < nums.length; i++) {
  	if(i === 0) {
    	smallestNumber = nums[i]
    } else {
    	if(smallestNumber > nums[i]) {
      	smallestNumber = nums[i]
      }
    }
  }
  return smallestNumber
}

console.log(findSmallestNumber(numbers))

// Fizz Buzz

function fizzBuzz(num) {
  if(num % 5 == 0 && num % 3 == 0) {
    console.log("Fizz Buzz!")
  } else if(num % 3 == 0) {
    console.log("Fizz")
  } else if(num % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log("Not fizzing or buzzing...")
  }
}

fizzBuzz(30)
fizzBuzz(27)
fizzBuzz(25)
fizzBuzz(4)

// Is it Even or Odd?

function evenOrOdd(num) {
  if(num % 2 == 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

console.log(evenOrOdd(44))
console.log(evenOrOdd(43))

// Ascending Order

// A way with just loops and ifs

let sortingArray = [8, 4, 56, 7, 3, 1]
let newArray = []
let counter = 0

for(let j = 0; j < sortingArray.length; j++) {
  if(newArray.length == 0) {
    let smallnumber = Infinity
    for(let i = 0; i < sortingArray.length; i++) {
      if(smallnumber > sortingArray[i]) {
        smallnumber = sortingArray[i]
      }
    }
  newArray.push(smallnumber)
  } else {
    smallnumber = Infinity
    for(let i = 0; i < sortingArray.length; i++) {
      counter = 0
      for(let k = 0; k < j; k++) {
        if(newArray[k] != sortingArray[i]) {
          counter++
          if(smallnumber > sortingArray[i] && counter == j) {
            smallnumber = sortingArray[i]
          }
        }
      }  
    }
    newArray.push(smallnumber)
  }
}

console.log(newArray)

// A Way using .includes
let sortingArray = [8, 4, 56, 7, 3, 1]
let newArray = []

for(let j = 0; j < sortingArray.length; j++) {
  if(newArray.length == 0) {
    let smallnumber = Infinity
    for(let i = 0; i < sortingArray.length; i++) {
      if(smallnumber > sortingArray[i]) {
        smallnumber = sortingArray[i]
      }
    }
  newArray.push(smallnumber)
  } else {
   smallnumber = Infinity
    for(let i = 0; i < sortingArray.length; i++) {
     if(!newArray.includes(sortingArray[i])) {
       if(smallnumber > sortingArray[i]) {
         smallnumber = sortingArray[i]
        }
      }
    }
    newArray.push(smallnumber)
  }
}

console.log(newArray)

// shortcut way
// let sortingArray = [8, 4, 56, 7, 3, 1]
// sortingArray.sort((a,b) => a - b)
// console.log(sortingArray)



// Descending Order

// A Way with just loops and ifs

let sortingArray = [8, 4, 56, 7, 3, 1]
let newArray = []
let counter = 0

for(let j = 0; j < sortingArray.length; j++) {
  if(newArray.length == 0) {
    let bignumber = -1000000
    for(let i = 0; i < sortingArray.length; i++) {
      if(bignumber < sortingArray[i]) {
        bignumber = sortingArray[i]
      }
    }
  newArray.push(bignumber)
  } else {
    bignumber = -1000000
    for(let i = 0; i < sortingArray.length; i++) {
      counter = 0
      for(let k = 0; k < j; k++) {
        if(newArray[k] != sortingArray[i]) {
          counter++
          if(bignumber < sortingArray[i] && counter == j) {
            bignumber = sortingArray[i]
          }
        }
      }  
    }
    newArray.push(bignumber)
  }
}

console.log(newArray)

// A Way using .includes
let sortingArray = [8, 4, 56, 7, 3, 1]
let newArray = []

for(let j = 0; j < sortingArray.length; j++) {
  if(newArray.length == 0) {
    let bignumber = -1000000
    for(let i = 0; i < sortingArray.length; i++) {
      if(bignumber < sortingArray[i]) {
        bignumber = sortingArray[i]
      }
    }
  newArray.push(bignumber)
  } else {
   bignumber = -1000000
    for(let i = 0; i < sortingArray.length; i++) {
     if(!newArray.includes(sortingArray[i])) {
       if(bignumber < sortingArray[i]) {
         bignumber = sortingArray[i]
        }
      }
    }
    newArray.push(bignumber)
  }
}

console.log(newArray)

// shortcut way
// let sortingArray = [8, 4, 56, 7, 3, 1]
// sortingArray.sort((a,b) => b - a)
// console.log(sortingArray)