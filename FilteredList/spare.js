
const form = document.querySelector("#addForm");
const todoInput = document.querySelector("#item");
const todoBtn = document.querySelector("#btn");
const todoUl = document.querySelector("#items");
const liList = document.getElementsByTagName("li");

let id = 0;

const todoHandler = (value) => {
  const li = document.createElement("li");
  li.className = "list-group-item";

  li.setAttribute("id", id);
  li.appendChild(document.createTextNode(value));
  const button = document.createElement("button");
  button.className = "btn btn-danger btn-sm float-end delete";
  button.appendChild(document.createTextNode("X"));
  li.appendChild(button);
  todoUl.appendChild(li);
  ++id;
};

JSON.parse(localStorage.getItem("todos"))?.length &&
  JSON.parse(localStorage.getItem("todos"))?.forEach((todo) =>
    todoHandler(todo.value)
  );

form.addEventListener("submit", (e) => {
  e.preventDefault();
  todoHandler(todoInput.value);
  localStorage.getItem("todos")
    ? localStorage.setItem(
        "todos",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("todos")),
          { id: id - 1, value: todoInput.value },
        ])
      )
    : localStorage.setItem(
        "todos",
        JSON.stringify([{ id: id - 1, value: todoInput.value }])
      );
  form.reset();
});

const deleteBtn = document.querySelector("#delete");
todoUl.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    
    e.target.parentNode.remove();
    id = 0;
    Array.from(liList).forEach((i) => {
      i.setAttribute("id", id);
      ++id;
    });

    localStorage.setItem(
      "todos",
      JSON.stringify(
        JSON.parse(localStorage.getItem("todos")).filter(
          (todo) => todo["id"] !== parseInt(e.target.parentNode.id)
        )
      )
    );
  }
});

const filter = document.querySelector("#filter");

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let items = document.getElementsByTagName("li");
  [...items].forEach((element) => {
    let itemName = element.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
