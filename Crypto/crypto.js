let myCrypto = [];
let allArrayCrypto;

window.onload = function() {
    getApi();   
}

const getApi = async () => {
    try {
        const res = await fetch("https://api.coinranking.com/v2/coins");
        if (!res.ok) {
            throw new Error(res.statusText);
        } else {
            const info = await res.json();
            render(info.data.coins);
        }
    } catch (err) {
        console.log(err);
    }
}

const render = (coins) => {
    allArrayCrypto = coins;
    console.log(allArrayCrypto);
    coins.forEach(element => {
        myCrypto.push(element.name);
    });
}

const form = document.getElementById("search-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("coin-input").value;
    console.log(input);
    compareCoins(input);
    form.reset();
});

const compareCoins = (targetCoin) => {
    const notFound = document.querySelector('.msg');
    const formattedTargetCoin = targetCoin.trim().toLowerCase();
    const selectedCoin = allArrayCrypto.find(element => element.name.trim().toLowerCase() === formattedTargetCoin);
    console.log(selectedCoin);
   if (selectedCoin) {
       notFound.innerText=''
       renderCoins(selectedCoin);
   } else {
       console.log(`Coin '${targetCoin}' not found.`);
       notFound.innerText= `Coin ${targetCoin} not found.`;
   }
}

const renderCoins = (selectedCoin) => {
    const { name, change, iconUrl, price, symbol } = selectedCoin;
    console.log(name, change, iconUrl, price, symbol);

    const coinItem = document.createElement('li');
    coinItem.classList.add('coin');

    //* Create the HTML structure for the coin card
    const coinContent = `
        <div class="coin-icon">
            <img src="${iconUrl}" alt="${name}" width="100" height="100">
        </div>
        <h3>${name} <sup class="coin-name">${symbol}</sup></h3>
        <p class="coin-temp">${price}$</p>
        <p>Change: <span>${change}</span></p>
    `;

    //* Set the HTML content for the coin card
    coinItem.innerHTML = coinContent;

    //* Get the coins list and check if there are existing coin cards
    const coinsList = document.querySelector('.coins');
    const existingCoins = coinsList.querySelectorAll('.coin');

    //* If there are existing coin cards, insert the new coin at the first position
    if (existingCoins.length > 0) {
        coinsList.insertBefore(coinItem, existingCoins[0]);
    } else {
        //* Otherwise, simply append the new coin to the coins list
        coinsList.appendChild(coinItem);
    }
}


// ! Dont forget in the following there are some examples of how to use this return,filter and catch errors


// const form = document.querySelector(".top-banner form");
// const input = document.querySelector(".top-banner input");
// //.class1.class2 vs. .class1 .class2 
// const msgSpan = document.querySelector(".container .msg");
// const coinList = document.querySelector(".ajax-section .container .coins");

// //localStorage
// localStorage.setItem("apiKey", EncryptStringAES("coinranking254889bccdb8bff17fa6e0d89d489d31f7e29af752b833ae"));
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     getCoinDataFromApi();
//     //form.reset == e.target.reset
//     e.target.reset();
// });

// const getCoinDataFromApi = async () => {
//     //alert("Get Coin Data!!");
//     const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
//     //console.log(apiKey);
//     //!!!template literal!!!
//     const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
//     const options = {
//         headers: {
//             'x-access-token': apiKey,
//         },
//     };
//     //fetch vs. axios
//     //   const response = await fetch(url, options)
//     //   .then((response) => response.json())
//     //   .then((result) => console.log(result.data.coins[0]));
//     try{
//         const response = await axios(url, options);
//         //console.log(response.data.data.coins[0]);
//         //obj. dest.
//         const { price, name, change, iconUrl, symbol } = response.data.data.coins[0];
//         //console.log(iconUrl);
    
//         //Coin Control!!!
//         const coinNameSpans = coinList.querySelectorAll("h2 span");
//         //filter vs. map(array)
//         if (coinNameSpans.length > 0) {
//             const filteredArray = [...coinNameSpans].filter(span => span.innerText == name);
//             console.log(filteredArray);
//             if (filteredArray.length > 0) {
//                 msgSpan.innerText = `You already know the data for ${name}, Please search for another coin 😉`;
//                 setTimeout(() => {
//                     msgSpan.innerText = "";
//                 }, 3000);
//                 // return;
//             }
//         }

//         //continue xxxx return
//         const createdLi = document.createElement("li");
//         createdLi.classList.add("coin");
//         createdLi.innerHTML = `
//             <h2 class="coin-name" data-name=${name}>
//                 <span>${name}</span>
//                 <sup>${symbol}</sup>
//             </h2>
//             <div class="coin-temp">$${Number(price).toFixed(6)}</div>
//             <figure>
//                 <img class="coin-icon" src=${iconUrl}>                
//                 <figcaption style='color:${change < 0 ? "red" : "green"}'>
//                     <span><i class="fa-solid fa-chart-line"></i></span>
//                     <span>${change}%</span>
//                 </figcaption>
//             </figure>
//             <span class="remove-icon">
//                 <i class="fas fa-window-close" style="color:red"></i>
//             </span>`;
//         //append vs. prepend
//         //append vs appendChild
//         coinList.prepend(createdLi);
//         //remove func.
//         createdLi.querySelector(".remove-icon").addEventListener("click", () => {
//             createdLi.remove();
//         });
//     }
//    catch(error){
//     //error logging
//     //postErrorLog("crypto.js", "getCoinDataFromApi", new Date(), error...);
//     msgSpan.innerText = `Coin not found!`;
//     setTimeout(() => {
//         msgSpan.innerText = "";
//     }, 3000);
//    }

// }
// //http response codes
// //rest api vs. soap api
