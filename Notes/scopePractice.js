"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear; // block scoped
  console.log(firstName); // Alex
  let num = 4; // block scoped
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`; // block scoped
    console.log(output);

    if ((birthYear) => 1980 && birthYear <= 1996) {
      var millenial = true; // function/globally scoped
      const str = `${firstName} you are a millenial`; // block scoped
      console.log(str);
    }
    console.log(str);
    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = "Alex"; // block scoped
calcAge(1991);
