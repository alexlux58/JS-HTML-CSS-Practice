const string = "filea.mp3 file1.mp3 file2.mp3 file3.jpg other.txt";
const regex = /(\w+)\.mp3/g;
const isExisting = regex.test(string);
console.log(isExisting);

// ^ represents the start of the string
// $ represents the end of the string
// [a-zA-Z], + is one or more, * is zero or more, {1,4} specifies lenght one to four chars

let match = regex.exec(string);
while (match) {
  const name = match[1];
  console.log(name);
  match = regex.exec(string);
}
