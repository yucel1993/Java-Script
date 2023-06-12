// !Mac Info

const MacbookPlusBtn=document.querySelector("#macPlus")
const MacbookMinBtn=document.querySelector("#macMinus")
const MacQuantity=document.querySelector("#quantityMac")
const MacTotal=document.querySelector("#macTotal")
const MacTrash=document.querySelector("#macTrash")

// !Keyboard info

const keyboardPlusBtn=document.querySelector("#keyboardPlus")
const keyboardMinBtn=document.querySelector("#keyboardMinus")
const keyboardQuantity=document.querySelector("#quantityKeyboard")
const keyboardTotal=document.querySelector("#keyboardTotal")
const keyboardTrash=document.querySelector("#keyboardTrash")

// !Apple info

const ApplePlusBtn=document.querySelector("#applePlus")
const AppleMinBtn=document.querySelector("#appleMinus")
const AppleQuantity=document.querySelector("#quantityApple")
const AppleTotal=document.querySelector("#appleTotal")
const AppleTrash=document.querySelector("#appleTrash")

//! Main section

const allTrash=document.querySelector("#allTrash")
const beforePrice=document.querySelector("#mainSum")
const shippingPrice=document.querySelector("#cart-shipping")
const shippingPriceNumber=document.querySelector("#shippingPriceNumber")

const shippingPrice2 = parseFloat(shippingPriceNumber.textContent.replace(",", "."));

const tax=document.querySelector("#tax")
const total=document.querySelector("#total")

const myChart=document.querySelector("allProduct")

const body=document.querySelector("body")
// !Variables


const macBook = 1474.99;
const keyboard = 185.99;
const mouse = 89.99;

// * Calculators

let quantityMac = Number(MacQuantity.textContent);
let priceMAC = Number(MacTotal.textContent);

let quantityKeyboard = Number(keyboardQuantity.textContent);
let priceKeyboard = Number(keyboardTotal.textContent);

let quantityApple=Number(AppleQuantity.textContent);
let priceApple = Number(AppleTotal.textContent);

// ? Events of Mac



  
  // Event listener for Mac quantity changes
  MacbookPlusBtn.addEventListener("click", (e) => {
    if (e.target.id == "macPlus") {
      ++quantityMac;
    }
    MacQuantity.textContent = quantityMac;
    if (MacQuantity.textContent == "0" || MacQuantity.textContent < "0") {
      MacTotal.textContent = 0;
    } else {
      MacTotal.textContent = Number(MacQuantity.textContent) * macBook;
    }
    calculateTotalPrice(); // Call the function to update the total price
  });
  
  MacbookMinBtn.addEventListener("click", (e) => {
    if (e.target.id == "macMinus") {
      if (quantityMac > 0) {
        --quantityMac;
      }
    }
    MacQuantity.textContent = quantityMac;
    if (MacQuantity.textContent == "0" || MacQuantity.textContent < "0") {
      MacTotal.textContent = 0;
    } else {
      MacTotal.textContent = Number(MacQuantity.textContent) * macBook;
    }
    calculateTotalPrice(); // Call the function to update the total price
  });
  
  // Event listener for keyboard quantity changes
  keyboardPlusBtn.addEventListener("click", (e) => {
    if (e.target.id == "keyboardPlus") {
      ++quantityKeyboard;
    }
    keyboardQuantity.textContent = quantityKeyboard;
    if (keyboardQuantity.textContent == "0" || keyboardQuantity.textContent < "0") {
      keyboardTotal.textContent = 0;
    } else {
      keyboardTotal.textContent = Number(keyboardQuantity.textContent) * keyboard;
    }
    calculateTotalPrice(); // Call the function to update the total price
  });
  
  keyboardMinBtn.addEventListener("click", (e) => {
    if (e.target.id == "keyboardMinus") {
      if (quantityKeyboard > 0) {
        --quantityKeyboard;
      }
    }
    keyboardQuantity.textContent = quantityKeyboard;
    if (keyboardQuantity.textContent < "0") {
      keyboardTotal.textContent = 0;
    } else {
      keyboardTotal.textContent =
        Number(keyboardQuantity.textContent) * keyboard;
    }
    calculateTotalPrice(); // Call the function to update the total price
  });
  // Event listener for Apple quantity changes
  ApplePlusBtn.addEventListener("click", (e) => {
    if (e.target.id == "applePlus") {
      ++quantityApple;
    }
    AppleQuantity.textContent = quantityApple;
    if (AppleQuantity.textContent == "0" || AppleQuantity.textContent < "0") {
      AppleTotal.textContent = 0;
    } else {
      AppleTotal.textContent = Number(AppleQuantity.textContent) * mouse;
    }
    calculateTotalPrice(); // Call the function to update the total price
  });
  
  AppleMinBtn.addEventListener("click", (e) => {
    if (e.target.id == "appleMinus") {
      if (quantityApple > 0) {
        --quantityApple;
      }
    }
    AppleQuantity.textContent = quantityApple;
    if (AppleQuantity.textContent < "0") {
      AppleTotal.textContent = 0;
    } else {
      AppleTotal.textContent = Number(AppleQuantity.textContent) * mouse;
    }
    calculateTotalPrice(); // Call the function to update the total price
  });
  // ...
  
  // Function to calculate the total price
  function calculateTotalPrice() {
    let allPrices =
      parseFloat(MacTotal.textContent) +
      parseFloat(AppleTotal.textContent) +
      parseFloat(keyboardTotal.textContent);
    console.log(allPrices);
    beforePrice.textContent = allPrices;
    console.log(allPrices)
    

    
// !Shipping section

    if (allPrices > 1250) {
        shippingPriceNumber.textContent = "Free delivery";
        shippingPrice.classList.remove("dolar");
      } else if(allPrices > 0) {
        shippingPriceNumber.textContent = "25.99";
        shippingPrice.classList.add("dolar");
      }else if(allPrices==0){
        shippingPriceNumber.textContent = "0"
      }
    
      beforePrice.textContent = allPrices;

    //   !Tax section
     tax.textContent=allPrices * 0.18;

     if(allPrices==0){
        total.textContent="0"
     }else{
     total.textContent=allPrices + shippingPrice2 + allPrices * 0.18;
     }
}
  
  // ...
  
  // Call the function to initialize the total price
  calculateTotalPrice();
  
//   !Delete section
body.addEventListener("click", (e) => {

    if(e.target.id == "macTrash"){
    
    document.getElementsByClassName("main__product")[0].style.display = "none";
    if(document.getElementsByClassName("main__product")[0].style.display = "none"){
        MacTotal.textContent="0"
        calculateTotalPrice();
    }
    }
    else if(e.target.id == "keyboardTrash"){
    document.getElementsByClassName("main__product")[1].style.display = "none";
    if(document.getElementsByClassName("main__product")[1].style.display = "none"){
        keyboardTotal.textContent="0"
        calculateTotalPrice();
    }
    }else if(e.target.id == "appleTrash"){
        document.getElementsByClassName("main__product")[2].style.display = "none";
        if(document.getElementsByClassName("main__product")[2].style.display = "none"){
            AppleTotal.textContent="0"
            calculateTotalPrice();
        }
    }else if(e.target.id == "allTrash"){
        console.log(e.target.id)
        document.getElementsByClassName("main__product")[2].style.display = "none";
        document.getElementsByClassName("main__product")[1].style.display = "none";
        document.getElementsByClassName("main__product")[0].style.display = "none";
        MacTotal.textContent="0"
        keyboardTotal.textContent="0"
        AppleTotal.textContent="0"
        calculateTotalPrice();

    }
    })


// const withOutMac=()=>{
//     let allPrices =
       
//       parseFloat(AppleTotal.textContent) +
//       parseFloat(keyboardTotal.textContent);
//     console.log(allPrices);
//     beforePrice.textContent = allPrices;
//     console.log(allPrices)
    

    
// // !Shipping section

//     if (allPrices > 1250) {
//         shippingPriceNumber.textContent = "Free delivery";
//         shippingPrice.classList.remove("dolar");
//       } else if(allPrices > 0) {
//         shippingPriceNumber.textContent = "25.99";
//         shippingPrice.classList.add("dolar");
//       }else if(allPrices==0){
//         shippingPriceNumber.textContent = "0"
//       }
    
//       beforePrice.textContent = allPrices;

//     //   !Tax section
//      tax.textContent=allPrices * 0.18;

//      if(allPrices==0){
//         total.textContent="0"
//      }else{
//      total.textContent=allPrices + shippingPrice2 + allPrices * 0.18;
//      }
// }


// const withoutKeyboard=()=>{

//     let allPrices =
//     parseFloat(MacTotal.textContent) +
//     parseFloat(AppleTotal.textContent) ;
//   console.log(allPrices);
//   beforePrice.textContent = allPrices;
//   console.log(allPrices)
  

  
// // !Shipping section

//   if (allPrices > 1250) {
//       shippingPriceNumber.textContent = "Free delivery";
//       shippingPrice.classList.remove("dolar");
//     } else if(allPrices > 0) {
//       shippingPriceNumber.textContent = "25.99";
//       shippingPrice.classList.add("dolar");
//     }else if(allPrices==0){
//       shippingPriceNumber.textContent = "0"
//     }
  
//     beforePrice.textContent = allPrices;

//   //   !Tax section
//    tax.textContent=allPrices * 0.18;

//    if(allPrices==0){
//       total.textContent="0"
//    }else{
//    total.textContent=allPrices + shippingPrice2 + allPrices * 0.18;
//    }
    
// }

// const withoutApple=()=>{


//     let allPrices =
//     parseFloat(MacTotal.textContent) +
    
//     parseFloat(keyboardTotal.textContent);
//   console.log(allPrices);
//   beforePrice.textContent = allPrices;
//   console.log(allPrices)
  

  
// // !Shipping section

//   if (allPrices > 1250) {
//       shippingPriceNumber.textContent = "Free delivery";
//       shippingPrice.classList.remove("dolar");
//     } else if(allPrices > 0) {
//       shippingPriceNumber.textContent = "25.99";
//       shippingPrice.classList.add("dolar");
//     }else if(allPrices==0){
//       shippingPriceNumber.textContent = "0"
//     }
  
//     beforePrice.textContent = allPrices;

//   //   !Tax section
//    tax.textContent=allPrices * 0.18;

//    if(allPrices==0){
//       total.textContent="0"
//    }else{
//    total.textContent=allPrices + shippingPrice2 + allPrices * 0.18;
//    }
// }