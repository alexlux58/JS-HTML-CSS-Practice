let numbers = [];
numbers.push(1,1,3); // add elements to the end of the array
let newnums = numbers.pop(); // remove elements from the end of the array
numbers.shift(1,4); // removes the first element from an array
numbers.unshift(2,3); // adds one or more elements to the beginning of an array
console.log(numbers);
console.log(newnums);
console.log(numbers.indexOf(1));
console.log(numbers.includes(3));
