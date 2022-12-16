let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(arr.slice(2)); // ['c', 'd', 'e', 'f', 'g', 'h']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['g', 'h']
console.log(arr.slice(-1)); // ['h']

// SPLICE is the same as slice but it modifies the original array
console.log(arr.splice(2));
console.log(arr.splice(-1)); // removes the last element in an array

console.log(arr.concat(["z", "q"]));
console.log(arr.reverse());
console.log(arr);

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2[0]);
console.log(arr2.at(0));
console.log(arr2.at(-1));
console.log(arr2[arr2.length - 1]);
console.log(arr2.slice(-1)[0]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forEach

movements.forEach(function (movement) {
  console.log(movement);
});

// for of

for (const movement of movements) {
  console.log(movement);
}
