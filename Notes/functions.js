"use strict";

const oneWord = function (str) {
  // replace all spaces in a word with an empty string and converts to lowercase
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  // splits the string in to words and destructures the first word and the rest
  const [first, ...otherWords] = str.split(" ");
  // then we return the first word capatalized with the rest of the words
  return [first.toUpperCase(), ...otherWords].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is tits ", upperFirstWord);
transformer("Java script", oneWord);

const high5 = function () {
  console.log("Hello");
};

document.body.addEventListener("click", high5);

// *****COOL TRICK*****
["Alex", "kevin", "john"].forEach(high5);

// returning a function in a function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Alex");
greet("Hello")("Kevin");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("John");

// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log("IIFE");
})();
(() => console.log("IIFE"))();

// creates a new scope for data privacy
{
  const isPrivate = 23;
  var notPrivate = 40;
}

// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
