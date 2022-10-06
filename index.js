let todoInput = document.querySelector("input[type='text']");
let addTodoBtn = document.querySelector("#add-todo");
let todoList = document.querySelector("#todo-list");
let doneList = document.querySelector("#done-list");
let deleteTodo = (event) => {
  //Tar bort det klickade elementets parent
  event.target.parentElement.remove();
};

addTodoBtn.addEventListener("click", () => {
  let currentTodos = document.querySelectorAll("#todo-list li");
  if (currentTodos.length < 5) {
    let value = todoInput.value;
    let todoLi = document.createElement("li");
    todoLi.innerText = value;
    //-------------- Delete button - START -----------------
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", deleteTodo);
    // deleteBtn.addEventListener("click", () => {
    //   todoLi.remove()
    // });
    todoLi.append(deleteBtn);
    //-------------- Delete button - END -----------------
    //-------------- Done button - START -----------------
    //Extra funktionalitet - Kunna markera en todo som utförd.
    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.addEventListener("click", (e) => {
      doneList.append(todoLi);
      deleteBtn.remove();
      doneBtn.remove();
    });
    todoLi.append(doneBtn);

    //-------------- Done button - END -------------------

    todoList.append(todoLi);
    todoInput.value = "";
  } else {
    alert("Too many todos! Finish some of them.");
  }
  console.log(currentTodos);
});