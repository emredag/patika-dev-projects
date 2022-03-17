// -------------- DOM -------------- //
let taskInput = document.getElementById("task");
let taskList = document.querySelector("#list");
let toastHTMLElement = document.getElementById("liveToast");
// ----------- DOM Finish ---------- //

function newElement() {
  let element = document.createElement("li");
  element.innerHTML = taskInput.value;

  if (taskInput.value) {
    taskList.appendChild(element);
  } else if (taskInput.value < 1) {
    alert("Listeye Boş Ekleme Yapamazsınız!");
  }
}
localStorage.setItem("taskItems", JSON.stringify(taskList.value));
// function addTask() {
//   let element = document.createElement("li");
//   element.innerHTML = taskInput.value;
//   taskList.appendChild(element);
// }

let option = {
  animation: true,
  delay: 2000,
};

function Toasty() {
  let toastHTML;
}
