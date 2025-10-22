//todo list input
const taskInput = document.getElementById("taskInput");

//todo list add btn
const addTaskBtn = document.getElementById("addTaskBtn");

//todo list ul
const taskList = document.getElementById("taskList");

function Add() {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let done = document.createElement("button");
  let del = document.createElement("button");

  done.setAttribute("id", "done");
  done.textContent = "done";

  del.textContent = "delete";
  del.setAttribute("id", "delete");

  span.textContent = taskInput.value;
  console.log("click me", taskInput.value);

  if (taskInput.value !== "") {
    div.appendChild(span);
    div.appendChild(done);
    div.appendChild(del);
    li.appendChild(div);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  done.addEventListener("click", () => {
    let item = done.parentElement;
    // item.style.textDecoration = "lineThrough"
    console.log("done", item);
  });

  del.addEventListener("click", () => {
    del.parentElement;
    del.parentNode;

    let item = del.parentElement.parentElement.remove();

    console.log("item", item);
  });
}

addTaskBtn.addEventListener("click", Add);

// taskInput.addEventListener("keydown", (event) => {
//   console.log("event", event.key);
//   if (event.key !== "f") {
//     return;
//   } else {
//     console.log("click me", taskInput.value);

//     let li = document.createElement("li");
//     let done = document.createElement("button");
//     let del = document.createElement("button");

//     done.textContent = "done";
//     done.setAttribute("id", "done");
//     del.textContent = "delete";
//     del.setAttribute("id", "delete");

//     li.textContent = taskInput.value;

//     if (taskInput.value !== "") {
//       taskList.appendChild(li);
//       taskList.appendChild(done);
//       taskList.appendChild(del);
//       taskInput.value = "";
//     }
//   }
// });
