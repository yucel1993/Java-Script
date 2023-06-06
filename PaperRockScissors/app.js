//! ---------------------Selectors-------------------
const rockImg =document.querySelector("#rock")
const paperImg =document.querySelector("#paper")
const scissorImg =document.querySelector("#scissor")

// //? Secilen elemanlarin tayicilari
const mainDiv=document.querySelector(".score-card")
const yourChoiceDiv=document.querySelector("#your-choice")
const pcChoiceDiv=document.querySelector("#pc-choice")
const selectionArticle=document.querySelector(".selection")

const userScore=document.querySelector("#your-score")
const pcScore=document.querySelector("#pc-score")
// //? message
const message=document.querySelector(".message")
const finalMessage=document.querySelector("#final-message")
const btn=document.querySelector("#play-again")
const overDiv=document.querySelector(".modal-card")
// //? Score

// //? Modal

// //* ------- Variables ------- */

let img=document.createElement("img")
let pcImg=document.createElement("img")

// //? Colors
const yellow="#ffc538"
const red="#fb778b"
const green="#5ab7ac"

// //* ------- Event Listeners ------- */
selectionArticle.addEventListener("click",(e)=>{
 console.log(e.target.id)
  img.src=`./assets/${e.target.id}.png`
  img.alt=e.target.id
  yourChoiceDiv.appendChild(img)
  // ! Another method for each item but unmodern
  // img.src="./assets/rock.png"
  // img.alt="rock"
  // yourChoiceDiv.appendChild(img)
  
  // yourChoiceDiv.innerHTML=`<img src="./assets/rock.png" alt="rock">`
  createPcSelection() 
})
btn.addEventListener("click",()=>{
  overDiv.classList.toggle("show")
  window.location.reload()
})


// //* ------- Functions ------- */


const createPcSelection=()=>{
  const pcArr=["rock","paper","scissor"]
  const pcRandom=pcArr[Math.floor(Math.random()*pcArr.length)]
  
  console.log(pcRandom)
  pcImg.src=`./assets/${pcRandom}.png`
  pcImg.alt=pcRandom
  pcChoiceDiv.appendChild(pcImg)
  calculate()
}


const calculate=()=>{

  if(img.alt===pcImg.alt){
    draw()
    	}else{
        if(img.alt==="rock"){
        pcImg.alt==="paper" ? youLost() : youWon()
         }else if(img.alt==="paper"){
        pcImg.alt==="scissor" ? youLost() : youWon()
        }else if (img.alt==="scissor"){
        pcImg.alt==="rock" ? youLost() : youWon()
    }
  }

  if(pcScore.textContent ==="10" || userScore.textContent ==="10"){

    openModel()
    // overDiv.style.display="block"
  }

} 
const draw=()=>{
message.textContent="It's a draw"
mainDiv.style.color=yellow
message.style.backgroundColor=yellow
}


const youWon=()=>{
  message.textContent="You won"
  mainDiv.style.color=green
  message.style.backgroundColor=green
  
  userScore.textContent++
}


const youLost=()=>{
  message.textContent="You lost"
  mainDiv.style.color=red
  pcScore.textContent++
  message.style.backgroundColor=red
}

const openModel=()=>{
  overDiv.classList.add("show")
  if(userScore.textContent ==="10"){
document.querySelector(".modal").style.backgroundColor=green
finalMessage.textContent="💃  You won 💪"
btn.style.color=green
  }else{
    document.querySelector(".modal").style.backgroundColor=red
finalMessage.textContent="😭 You Lost 😭"
btn.style.color=red

  }
}
// //* ------ Selectors ------- */
// const selectionArticle = document.querySelector(".selection")

// //? Secilen elemanlarin tayicilari
// const yourChoiceDiv = document.getElementById("your-choice")
// const pcChoiceDiv = document.getElementById("pc-choice")

// //? message
// const messagePar = document.querySelector(".message")

// //? Score
// const scoreCardSection = document.querySelector(".score-card")
// const pcScoreSpan = document.getElementById("pc-score")
// const yourScoreSpan = document.getElementById("your-score")

// //? Modal
// const modalCardSection = document.querySelector(".modal-card")
// const finalMessagePar = document.getElementById("final-message")
// const playAgainBtn = document.getElementById("play-again")

// //* ------- Variables ------- */
// let userSelectImg = document.createElement("img")
// let pcSelectImg = document.createElement("img")
// let pcRandom
// //? Colors
// const YELLOW = "#ffc538"
// const RED = "#fb778b"
// const GREEN = "#5ab7ac"

// //* ------- Event Listeners ------- */
// selectionArticle.addEventListener("click", (e) => {
//   // console.log(e.target.id)
//   if (e.target.id) {
//     userSelectImg.src = `./assets/${e.target.id}.png`
//     userSelectImg.alt = e.target.id
//     yourChoiceDiv.appendChild(userSelectImg)
//     createPcSelection()
//   }
// })

// playAgainBtn.addEventListener("click", () => {
//   // modalCardSection.classList.toggle("show")
//   // modalCardSection.classList.toggle("remove")
//   modalCardSection.style.display = "none"
//   window.location.reload()
// })

// //* ------- Functions ------- */

// const createPcSelection = () => {
//   const pcArr = ["rock", "paper", "scissor"]
//   pcRandom = pcArr[Math.floor(Math.random() * 3)]
//   pcSelectImg.src = `./assets/${pcRandom}.png`
//   pcSelectImg.alt = pcRandom
//   pcChoiceDiv.appendChild(pcSelectImg)
//   calculateResult()
// }

// const calculateResult = () => {
//   // console.log(userSelectImg.alt)
//   // console.log(pcSelectImg.alt)

//   //? Esitlik durumu
//   if (userSelectImg.alt === pcRandom) {
//     draw()
//   } else {
//     if (userSelectImg.alt === "rock") {
//       pcRandom === "paper" ? youLost() : youWin()
//     } else if (userSelectImg.alt === "scissor") {
//       pcRandom === "rock" ? youLost() : youWin()
//     } else if (userSelectImg.alt === "paper") {
//       pcRandom === "scissor" ? youLost() : youWin()
//     }
//   }

//   if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
//     openModal()
//   }
// }

// const draw = () => {
//   messagePar.textContent = "Its a draw"
//   scoreCardSection.style.color = YELLOW
//   messagePar.style.backgroundColor = YELLOW
// }

// const youLost = () => {
//   messagePar.textContent = "You Lost"
//   scoreCardSection.style.color = RED
//   messagePar.style.backgroundColor = RED
//   pcScoreSpan.textContent++
// }

// const youWin = () => {
//   messagePar.textContent = "You Win"
//   scoreCardSection.style.color = GREEN
//   messagePar.style.backgroundColor = GREEN
//   yourScoreSpan.textContent++
// }

// //? modal aç
// const openModal = () => {
//   modalCardSection.classList.add("show")

//   if (yourScoreSpan.textContent === "10") {
//     //? eger kullanici 10 puana usalti ise kullanici kazanmistir.
//     finalMessagePar.textContent = "💃 You Win🕺"
//     document.querySelector(".modal").style.backgroundColor = GREEN
//     playAgainBtn.style.color = GREEN
//   } else {
//     //? eger pc 10 puana ulasti ise pc kazanmistir.
//     finalMessagePar.textContent = "☹️ You Lost ☹️"
//     document.querySelector(".modal").style.backgroundColor = RED
//     playAgainBtn.style.color = RED
//   }
// }

// //! Local Storage'a veri yazma ve okuma
// localStorage.setItem("highScore", 5) //? veri yazma
// console.log(localStorage.getItem("highScore")) //? veri okuma

// //! İlkel Yontem
// //? Resimler
// // const rockImg = document.getElementById("rock")
// // const paperImg = document.getElementById("paper")
// // const scissorImg = document.getElementById("scissor")

// // rockImg.addEventListener("click", () => {
// //   image.src = "./assets/rock.png"
// //   image.alt = "rock"
// //   yourChoiceDiv.appendChild(image)

// //   //? innerHTML
// //   // yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock">`
// // })

// // paperImg.addEventListener("click", () => {
// //   image.src = "./assets/paper.png"
// //   image.alt = "paper"
// //   yourChoiceDiv.appendChild(image)
// // })

// // scissorImg.addEventListener("click", () => {
// //   image.src = "./assets/scissor.png"
// //   image.alt = "scissor"
// //   yourChoiceDiv.appendChild(image)
// // })
