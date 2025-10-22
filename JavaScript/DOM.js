// const para = document.querySelector("p");
// console.log(para);
const division = document.querySelector("div");
console.log(division);

// Let us target a particular div class
const div = document.querySelector("div");
console.log(div);

const h1 = document.querySelector("body > h1");
console.log(h1);

// // Getting all similar tags or classes
// const paras = document.querySelectorAll("p");
// console.log(paras);
// const errors = document.querySelectorAll(".error");
// console.log(errors);

// // Accessing a node list
// paras.forEach((para) => {
//   console.log(para);
// });

// // OR
// console.log(paras[2]);

// // Getting elements by their ID
const title = document.getElementById("page-title");
console.log(title);

// // Getting elements by their class name
const errors1 = document.getElementsByClassName("error");
console.log(errors1);

// // Getting elements by their tag name
// const tags = document.getElementsByTagName("p");
// console.log(tags);
// console.log(tags[1]);

// // Changing texts in paragraphs
// const hello = document.querySelector("p");
// console.log(hello.innerText);
// hello.innerText = "Perfect touch!";

// // changing multiple texts at once
// const allPees = document.querySelectorAll("p");
// console.log(allPees);
// allPees.forEach((hello) => {
//   console.log(hello.innerText);
//   hello.innerText += " New Texts";
// });

// // Changing the HTML of something
// const picking = document.querySelector(".content");
// console.log(picking.innerHTML);

// picking.innerHTML = "<h2>This is a new heading</h2>";
// console.log(picking.innerHTML);

// picking.innerText = "This is not a new line for the reading";
// console.log(picking.innerText);

// // Outputting an HTML template of people in an array
// const people = ["Mendy", "Fred", "Stone"];
// people.forEach((individual) => {
//   picking.innerHTML += `<p>${individual}</p>`;
// });
// console.log(picking.innerHTML);

// // Changing HTML Attributes
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute);
// link.setAttribute("href", "https://www.link.com");
// link.innerText = "The New Link";

// const message = document.querySelector("div.content");
// console.log(message.getAttribute("class"));

// message.setAttribute("class", "rich-content");
// console.log(message.getAttribute("class"));
// const content = document.querySelector(".content");
// console.log(content);

// let content = document.querySelector(".content");
// content.innerText = "This-is-another-error";

// let content1 = ["Letters", "Assignment", "Deliveries"];
// let test = content1.concat(["After", "Believe", "Result"]);
// console.log(test.join("-"));

// content1.forEach((select) => {
//   content.innerHTML += `-${select}`;
// });
// console.log(content.innerHTML);

// const para = document.querySelector("p");

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para.innerHTML);
//   para.innerText += " I found a Love";
//   console.log(para.innerText);
// });

// const ref = document.querySelector("a");
// console.log(ref.getAttribute("href"));
// ref.setAttribute("href", "https://www.mylink.com");
// console.log(ref.getAttribute("href"));
// ref.innerText = "Leave it at somewhere cool";

// const hello = document.querySelector("p.hello");
// hello.setAttribute("style", "color: darkorange;");
// console.log(hello.getAttribute("style"));

// const H1 = document.querySelector("h1");
// H1.style.color = "lightgreen";
// H1.style.margin = "50px";
// H1.style.fontSize = "60px";

// // Removing a property
// H1.style.margin = "";

// const elements = document.querySelectorAll("p");
// console.log(elements);
// elements.forEach((para) => {
//   console.log(para.textContent);
// });

// Adding class to each tag

const paras = document.querySelectorAll("p");
// const tryOut = para => {
//  if (para.textContent.includes("success")) {
//     para.classList.add("success");
//   };
// }
// console.log(tryOut);
paras.forEach((para) => {
  if (para.textContent.includes("success")) {
    para.classList.add("success");
  }
});
console.log(paras);

// Function declaration
function greet() {
  console.log("hello there");
}

// Function expression
const speak = function (name, time) {
  console.log(`Good ${(time = "evening")} ${(name = "Cweet")}`);
};
greet();
speak("Dani-EL", "Morning");

//  Regular functions and returning values
const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};
const area = calcArea(5);
console.log(area);

// Arrow functions
const newArea = (radius) => {
  return 3.14 * radius ** 2;
};

const aa = newArea(5);
console.log("New result:", aa);

// Practicing arrow functions
const greet2 = function () {
  return "hello, world";
};

const simplify = () => "hello, world";
const outcome = simplify();
console.log(outcome);

// const bill = function(products, tax) {
//   let total = 0;
//   for(let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));

let name = "shaun";

// functions
const resultOne = greet();

// methods
const result4 = name.toUpperCase();
console.log(result4);

// More practice
let peoples = ["jons", "fred", "direct", "june"];
const peoplesLog = (person, index) => {
  console.log(`${index} : hello ${person}`);
};
peoples.forEach(peoplesLog);

let people = ["fred", "matter", "solomon", "nathaniel", "ify"];
const viewPeople = (person, index) => {
  console.log(`${index} : hello ${person}`);
};
people.forEach(viewPeople);

// Objects literal notation
// let user = {
//   name: "fred martha",
//   email: "bokolodaniel1@gmail.com",
//   dateOfBirth: "22nd January, 2000",
//   location: "Nigeria"
// }
// let hello = "dateOfBirth";
// console.log(user);
// console.log(`${user.name}, ${user.location}`);
// console.log(user[hello]);

// object methods
let user = {
  name: "fred martha",
  email: "bokolodaniel1@gmail.com",
  dateOfBirth: "22nd January, 2000",
  blogs: [
    "what a man can do vs what a woman can do",
    "the differences between man and boy",
  ],
  location: "Nigeria",
  login: () => {
    console.log("this user is now logged in");
  },
  logout: () => {
    console.log("this user is now logged out");
  },
  logBlogs: function () {
    console.log("This person has written the following blogs:");
    this.blogs.forEach;
  },
};
user.login();
user.logout();
user.logBlogs();
