const input=document.querySelector(".input")
const btn1=document.querySelector(".btn-success")
const btn2=document.querySelector(".btn-danger")
const ul=document.querySelector(".ul")
input.focus()

btn1.addEventListener("click",()=>{
    console.log(btn1)
    const li=document.createElement("li")
    console.log(li)
    
    li.innerText=input.value



    if (ul.firstChild) {
        ul.insertBefore(li, ul.firstChild); // Insert li before the first child of ul
    } else {
        ul.appendChild(li); // Append li if ul is empty
    }

    input.value=''
    input.focus()



    // console.log(li)
    // ul.appendChild(li)
    // console.log(btn1)

})

input.addEventListener("keydown",(e)=>{
    if(e.code=="Enter"){
        btn1.click()
    }
})

btn2.addEventListener("click",()=>{
     ul.removeChild(ul.lastElementChild)
})


input.addEventListener("keydown",(e)=>{
    if(e.code=="Backspace"){
        btn2.click()
    }
})