const pageForm = document.getElementById("main-form");
pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const toDoList = document.getElementById("taskList");
  console.log(toDoList.value);
  const newTaskList = document.createElement("div");
  newTaskList.innerHTML = `<p>${toDoList.value}</p>`;
  const task = document.getElementById("coseDaFare");
  task.appendChild(newTaskList);

  const htmlPHovered = function () {
    const par = document.querySelector('p')

    par.style = text-decoration; line-through;
  }
  console.log(htmlPHovered)



});
