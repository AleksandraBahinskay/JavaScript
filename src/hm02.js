//1
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

//2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }

  return "Access denied, wrong password!";
}

// Change code above this line

//3
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
}

// Change code above this line

//4
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

//5
const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

//6
const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

//7
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

//8
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

//9
function getExtremeElements(array) {
  // Change code below this line
  array = [array[0], array[array.length - 1]];
  return array;

  // Change code above this line
}

//10
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);

  // Change code above this line
  return words;
}

//11
function calculateEngravingPrice(message, pricePerWord) {
  message = message.split(" ");
  const messageLength = message.length;
  const totalPrice = messageLength * pricePerWord;
  return totalPrice;
}

function calculateEngravingPrice(message, pricePerWord) {
  const messageLength = message.split(" ").length;
  const totalPrice = messageLength * pricePerWord;
  return totalPrice;
}

function calculateEngravingPrice(message, pricePerWord) {
  message = message.split(" ").length;
  const totalPrice = message * pricePerWord;
  return totalPrice;
}

//12
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

  string = array.join(delimeter);

  // Change code above this line
  return string;
}

//13
function slugify(title) {
  // Change code below this line

  const normalizedTitle = title.toLowerCase();
  const words = normalizedTitle.split(" ");
  const slug = words.join("-");
  return slug;

  // Change code above this line
}

function slugify(title) {
  // Change code below this line
  return title.toLowerCase().split(" ").join("-");
  // Change code above this line
}

//14
const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

//15
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); // Change this line

//16
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let arr = firstArray.concat(secondArray);
  if (arr.length > maxLength) {
    arr.length = maxLength;
    return arr;
  }
  return arr.slice(0);
}

//17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

//18
function calculateTotal(number) {
  let total = 0;
  for (i = 1; i <= number; i += 1) {
    total += i;
  }
  return total;
}

//19
const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
  // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

//20
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (value of order) {
    total += value;
  }
  // Change code above this line
  return total;
}

//21
function findLongestWord(string) {
  const arrayString = string.split(" ");
  let longestWord = arrayString[0];
  for (let i = 0; i < arrayString.length; i += 1) {
    if (longestWord.length < arrayString[i].length) {
      longestWord = arrayString[i];
    }
  }
  return longestWord;
}

//22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

//23
function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

//24
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

//25
function getCommonElements(array1, array2) {
  //Объявить Новый пустой массив,
  const repeatElements = [];
  //через фор оф перебрать элементы первого массива,
  for (const element of array1) {
    //через иф проверить включаются элементы второго массива в первый(инклуд),
    if (array2.includes(element)) {
      //вывести общие элементы в Новый массив(push)
      repeatElements.push(element);
    }
  }
  //и ретерн новый массив
  return repeatElements;
  // Change code above this line
}

//26
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const item of order) {
    total += item;
  }

  // Change code above this line
  return total;
}

//27
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

//28
// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

//29
function getEvenNumbers(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

//30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

//31
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  // Change code above this line
}

//32
function includes(array, value) {
  // Change code below this line
  for (const arr of array) {
    if (arr === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}
