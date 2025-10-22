// strings
let age = 25;
let year = 2025;
console.log(age, year);
const points = 100;
console.log(points);

console.log("Hello, world");
let email = "cr8ivedan@gmail.com";
console.log(email);

// strings concatenation
let firstName = "Daniel";
let lastName = "David";
let fullName = "Daniel " + "David";
console.log(fullName);

// getting characters
console.log(fullName[9]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

let index = email.indexOf("n");
console.log(index);

// common string methods
let result = email.lastIndexOf("i");
// let result = email.slice(0, 9);
// let result = email.substr(0, 15);
// let result = email.replace("c", "d");
console.log(result);

let radius = 10;
const pi = 3.14;
console.log(radius, pi);
// math operators include +, -, *, /, **, %
// console.log(10 / 2);
// let result = 10 % 3;
// console.log(result);

let areaOfCircle = pi * radius ** 2;
console.log(areaOfCircle);

// let result = 10 + (5 * 3) ** 2;
// console.log(result);

// let likes = 10;
// likes += 2;
// console.log(likes);

// //NaN = Not a Number
// let blogLikes = "The Blog Has " + likes + " Likes";
// console.log(blogLikes);

// template strings
const title = "Best Reads of 2019";
const author = "Mario";
const likes = 30;
// concatenation
let Report =
  "The blog called " + title + " by " + author + " has " + likes + " likes.";
console.log(Report);
// template strings
Report = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(Report);

// Creating HTML Templates
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);

// creating Arrays
let arrays = ["Sharp", "Lifers", "Dollars"];
arrays[1] = "When";
console.log(arrays[1]);

let ages = [1, 2, 3, 4];
ages[3] = 700;
console.log(ages[3]);
console.log(ages.length);

// array methods
let random = ages.join("-");
console.log(random);
let moreRandom = ages.concat(["Alpha", "and", "Omega"]);
console.log(moreRandom);
let moreMore = ages.push("Father");
console.log(ages);
let moreAnd = ages.pop();
console.log(moreAnd);

// Booleans
let email2 = "cweetsavour@gmail.com";

let result2 = email.includes("@");

let result3 = email.includes("!");

let Names = ["Mario", "Fred", "Mister"];

let nameResult = Names.includes("Fred");

let nameResult2 = Names.includes("Matter");

console.log(result2);
console.log(result3);
console.log(nameResult);
console.log(nameResult2);

// comparison operators
let figure = 30;
console.log(figure == 30);
console.log(figure == 40);
console.log(figure != 30);
console.log(figure > 20);
console.log(figure < 30);
console.log(figure >= 30);

// loose and strict comparison
let age1 = 25;
console.log(age1 == "25");
console.log(age1 === "25");

// type conversion
let value = "100";
value = Number(value);
console.log(value + 1);

let letter = 50;
letter = String(letter);
console.log(letter);

letter = Boolean(letter);
console.log(letter);

let promp = prompt("Enter only numbers between 1 and 7");
promp = Number(promp);

switch (promp) {
  case 1:
    alert("You've entered number 1");
    break;

  case 2:
    alert("You've entered number 2");
    break;

  case 3:
    alert("You've entered number 4");
    break;

  case 4:
    alert("You've entered number 4");
    break;

  case 5:
    alert("You've entered number 5");
    break;

  case 6:
    alert("You've entered number 6");
    break;

  case 7:
    alert("You've entered number 7");
    break;

  default:
    alert("Invalid data entered. Enter any number between 1 and 7");
}

// for loops
for (let i = 0; i < 5; i++) {
  console.log("in loop:", i);
}
console.log("Loop ended.");

// const names = ["Mario", "Snow", "Believe"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

const names1 = ["Maria", "Son", "Stan", "Ozon"];
for (let i = 0; i < names1.length; i++) {
  console.log(i);
}
console.log("Loop finished!");

// while loops
const names = ["Joke", "Fred", "Again"];
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
console.log("Loop ended!");

// do while loops
let k = 2;
do {
  console.log("The Value of k is:", k);
  k++;
} while (k > 5);

// if statements
const age2 = 22;
if (age2 > 20) {
  console.log("You are over 20 years old!");
}
const ninjas = ["B", "A", "C", "D"];
if (ninjas.length < 5) {
  console.log("That's a lot of ninjas in there!");
}

let test = ninjas.concat(["After", "Between", "Under"]);
console.log(test);

// combining IF, ELSE IF, and ELSE statements with logical AND (&&) and OR (||)
const password = "p@ssword";
if (password.length >= 12 && password.includes("@")) {
  console.log("Strong password");
} else if (password.length >= 8 || password.includes("@")) {
  console.log("Acceptable password");
} else {
  console.log("Weak password");
}

// Logical NOT (!) statement in combination with IF statements
let user = false;
if (!user) {
  console.log("This user is true");
} else {
  console.log("User is false");
}

// Break and Continue
const scores = [50, 100, 30, 0, 90, 200, 40];
for (f = 0; f < scores.length; f++) {
  if (scores[f] === 0) {
    continue;
  }
  console.log("Your score is:", scores[f]);

  if (scores[f] === 200) {
    console.log("Congrats, you got the top score!");
    break;
  }
}
// switch statements
const grade = "D";

switch (grade) {
  case "A":
    console.log("You got an A!");
    break;
  case "B":
    console.log("You got a B!");
    break;
  case "C":
    console.log("You got a C!");
    break;
  case "D":
    console.log("You got a D!");
    break;
  case "E":
    console.log("You got an E!");
    break;
  default:
    console.log("Not a valid grade");
}
// variables & block scope
let age4 = 30;

if (true) {
  let age4 = 50;
  console.log("Inside code block:", age4);
}

console.log("Outside code block:", age4);
