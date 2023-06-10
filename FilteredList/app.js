const  form=document.querySelector("#addForm")
const  todoInput=document.querySelector("#item")
const  todoBtn=document.querySelector("#btn")
const  todoUl=document.querySelector("#items")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const li=document.createElement("li")
    li.className="list-group-item"
    li.appendChild(document.createTextNode(todoInput.value))
    const button=document.createElement("button")
    button.className="btn btn-danger btn-sm float-end delete"
    button.appendChild(document.createTextNode("X"))
    li.appendChild(button)
    todoUl.appendChild(li)
    form.reset()
})

const deleteBtn=document.querySelector("#delete")
todoUl.addEventListener("click",(e)=>{
if(e.target.classList.contains("delete")){
    e.target.parentNode.remove()
}
})

const filter=document.querySelector("#filter")

filter.addEventListener("keyup",filterItems)

function filterItems(e){
    // conver target value
    let text=e.target.value.toLowerCase()
    let items=document.getElementsByTagName("li");
    [...items].forEach(element=> {
        let itemName=element.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            element.style.display="block"
        }else{
            element.style.display="none"

        }
    });
}