"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// Descruture Objects = {"": "" }

const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);
const goodArr = [1, 2, ...arr]; // spread operator
console.log(goodArr);

const foodz = ["pizza", "baccon", "cheese", "apple", "ham", "pasta"];
const [pizza, , cheese, ...otherfoodz] = [...foodz]; // rest pattern
console.log(pizza, cheese, otherfoodz);

// Short circuting && and ||
let numGuests = 0;
const guests1 = numGuests ? numGuests : 10;
console.log(guests1); // 10
const guests2 = numGuests || 10;
console.log(guests2); // 10

console.log(0 && "Alex"); // defaults to first value if falsy, 0
console.log(7 && "Alex"); // Alex
console.log("Hello" && 23 && null && "Alex"); // null
