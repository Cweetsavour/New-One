const h1 = document.querySelector("h1");
h1.style.margin = "0px 20px";
const secH1 = document.getElementsByTagName("div")[4];
secH1.style.marginLeft = "12px";
secH1.style.fontSize = "13px";
secH1.style.alignItems = "center";
const rePo = document.getElementsByTagName("div")[3];
rePo.style.justifyItems = "center";
rePo.style.textDecoration = "underline";
rePo.style.fontFamily = "helvetica";
rePo.style.color = "darkblue";

const calc = document.querySelector("#calc");
const calculate = calc.getAttribute("value");
const delBtn = document.querySelector("#del");
const clear = document.querySelector("#clear");
const equBtn = document.querySelector("#equal");
const buttons = document.querySelectorAll('[class*="btn"]');

let calculation = "";
let justCalculated = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let figure = btn.dataset.value || btn.textContent;
    if (justCalculated && !isNaN(figure)) {
      calculation = "";
      justCalculated = false;
    } else if (justCalculated && isNaN(figure)) {
      justCalculated = false;
    }
    calculation += figure;
    calc.setAttribute("value", calculation);
  });
});

equBtn.addEventListener("click", () => {
  try {
    calculation = eval(calculation);
    calculation = calculation.toString();
    calc.setAttribute("value", calculation);
    justCalculated = true;
  } catch {
    calc.setAttribute("value", "Syntax Error");
    justCalculated = true;
  }
});

clear.addEventListener("click", () => {
  calculation = "";
  calc.setAttribute("value", "");
});

delBtn.addEventListener("click", () => {
  calculation = calculation.slice(0, -1);
  calc.setAttribute("value", calculation);
});

// const calc = document.getElementById("calc");
// let calculated = calc.getAttribute("value");

// const all = document.querySelectorAll('[class*="btn"]');
// let equal = document.querySelector("#equal");
// let clear = document.querySelector("#clear");

// let calculate = "";
// let justCalculated = false;

// // Handle number and operator buttons
// all.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     let figure = btn.dataset.value || btn.textContent;

//     // If a result was just displayed, clear before new input
//     if (justCalculated && !isNaN(figure)) {
//       calculate = "";
//       justCalculated = false;
//     } else if (justCalculated && isNaN(figure)) {
//       justCalculated = false;
//     }

//     calculate += figure;
//     calc.setAttribute("value", calculate);
//   });
// });

// equal.addEventListener("click", () => {
//   try {
//     calculate = eval(calculate);
//     calc.setAttribute("value", calculate);
//     calculate = calculate.toString();
//     justCalculated = true;
//   } catch {
//     calc.setAttribute("value", "Error");
//     justCalculated = true;
//   }
// });

// clear.addEventListener("click", () => {
//   calculate = "";
//   calc.setAttribute("value", "");
//   justCalculated = false;
// });

// const del = document.querySelector("#del");
// del.addEventListener("click", () => {
//   calculate = calculate.slice(0, -1);

//   calc.setAttribute("value", calculate);
// });
