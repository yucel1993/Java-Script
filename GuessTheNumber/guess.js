

const input=document.querySelector("#input")
const h2=document.querySelector(".h2")
const h3=document.querySelector(".h2")

input.focus()
const btn=document.querySelector("#btn")
let random=Math.floor(Math.random()*100)

let n=7


input.addEventListener("keydown",(e)=>{
    if(e.code=="Enter"){
        btn.click()
    }
})

btn.addEventListener("click",()=>{
    

    const input=document.querySelector("#input")
    console.log(random)
    if(input.value==random){
        
        h2.textContent = `Mastermind. You have found. it was ${random}`;
        
        
    }else if(input.value<random){
        answer=`Increase your number.
        You have ${n} chance left`
        
        h2.textContent = answer;
        
        n-- 
    }else{
        answer=`Decrease your number.
        You have ${n} chance left`
        
        h2.textContent = answer;
        n--
    }
    input.value=''
    input.focus()


    if(n==-1 && input!=random){
        h3.textContent=`You have lost. Secret Number was ${random}
        Refresh for new game`
    }

})




// const input=document.querySelector("#input")
// const h2=document.querySelector(".h2")
// const h3=document.querySelector(".h3")
// const btn=document.querySelector("#btn")
// let random=Math.floor(Math.random()*100+1)
// btn.addEventListener("click",()=>{
// console.log(input.value)
// console.log(random)
// let answer=''
// let result=''
// let n=2
// while(n>0){
//     // let user=+prompt("Enter your Number")
//     console.log(random)
//     if(input.value===random){
//         result="MasterMind"
//         console.log(result);
//         h2.innerHTML=`${text}`
//         break
//     }else if(input.value<random){
//        answer=`Increase your number.
//        You have ${n} chance left`
//        console.log(answer)
//        n--
//     }else{
//         answer=`Decrease your number.
//         You have ${n} chance left`
//         console.log(answer)
//         n--
//     }
// }
// })