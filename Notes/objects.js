let currentYear = 2022;

const Alex = {
  firstName: "Alex",
  lastName: "Lux",
  age: currentYear - 1996,
  job: "Hacker",
  Family: ["kevin", "mercedes"],
  calcAge: function (birthYear) {
    return currentYear - birthYear;
  },
};

console.log(Alex.firstName);
console.log(Alex["lastName"]);

Alex.message = "Hello";
Alex["anotherMessage"] = "Hello";
console.log(Alex);
// const message = prompt("Hello!")
// console.log(Alex[message]);

// undefined is a falsy value

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");
