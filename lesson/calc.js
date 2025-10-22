//value
const value = document.getElementById("value");
let calc = value.getAttribute("value");

//numbers
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

//operators
const dot = document.getElementById("dot");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

one.addEventListener("click", function () {
  let number = one.textContent;
  calc += number;
  value.setAttribute("value", calc);
});
two.addEventListener("click", function () {
  let number = two.textContent;
  calc += number;
  value.setAttribute("value", calc);
});
three.addEventListener("click", function () {
  let number = three.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
four.addEventListener("click", function () {
  let number = four.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
five.addEventListener("click", function () {
  let number = five.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
six.addEventListener("click", function () {
  let number = six.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
seven.addEventListener("click", function () {
  let number = seven.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
eight.addEventListener("click", function () {
  let number = eight.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
nine.addEventListener("click", function () {
  let number = nine.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
zero.addEventListener("click", function () {
  let number = zero.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});

dot.addEventListener("click", function () {
  let number = dot.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
minus.addEventListener("click", function () {
  let number = minus.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
plus.addEventListener("click", function () {
  let number = plus.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
times.addEventListener("click", function () {
  let number = times.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
divide.addEventListener("click", function () {
  let number = divide.textContent;
  calc = calc + number;
  value.setAttribute("value", calc);
});
clear.addEventListener("click", function () {
  // let number = two.textContent;
  calc = "";
  value.setAttribute("value", calc);
});
equal.addEventListener("click", function () {
  let total = eval(calc);
  calc = total.toString();
  value.setAttribute("value", total);
});

// Keyboard Events

const kbu = document.getElementById("up");
kbu.addEventListener("keyup", function () {
  console.log("Key up");
});

const kbd = document.getElementById("down");
kbd.addEventListener("keydown", function () {
  console.log("Key down");
});

const kbp = document.getElementById("press");
kbp.addEventListener("keypress", function () {
  console.log("Key press");
});

// let favoursfood = document.getElementById("fufu");
// let add = document.getElementById("add");
// let record = document.getElementById("record");

// let value = "";

// favoursfood.addEventListener("keypress", function (event) {
//   value += event.key;
//   //   console.log(value);
// });

// add.addEventListener("click", function () {
//   let li = document.createElement("li");
//   li.textContent = value;
//   if (value !== "") {
//     record.appendChild(li);
//     favoursfood.value = "";
//     value = "";
//   } else {
//     alert("Please enter your favourite fuufuu food");
//   }
// });
