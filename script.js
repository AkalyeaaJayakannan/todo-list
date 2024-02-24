console.log("The js is connected!!!");

const input = document.querySelector(".todoInput");
const addBtn = document.querySelector(".todoAddBtn");
const listContainer = document.querySelector(".todoListContainer");

function addTask() {
  if (input.value === "") {
    alert("Please enter the task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    saveData();
    input.value = "";
  }
}

listContainer.addEventListener(
  "click",
  (e) => {
    console.log("The event Listener is working!!!");
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
getData();
