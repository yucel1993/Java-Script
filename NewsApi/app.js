
const allBtns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");

allBtns.forEach((btn) => {
btn.addEventListener("click", (e) => {
    
    console.log(e.target.innerText);
    getData(e.target.innerText)

    })
})

const getData = async (subject) => {
  const APIKEY="3a86dc7bdc254fb38cd93735d62d40d1"
    const response = await fetch(`https://newsapi.org/v2/everything?q=${subject}&apiKey=${APIKEY}`);
    const data = await response.json();
    const articles = data.articles;
    console.log(articles);
    generateUI(articles);
}



const generateUI = (articles) => {
    container.innerHTML = "";
    for (let item of articles) {
      const { title, description, url, urlToImage, author, publishedAt } = item;
      if (!urlToImage) {
        continue; //? Skip this item if urlToImage is null
      }
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="news-image-container m-3">
          <img width="%35" src="${urlToImage}" alt="${title}">
          <br>
          <button class="close-button text-light p-3 mt-2 bg-warning border-0 rounded fs-5">Delete</button>
        </div>
        <div class="news-content">
          <div class="news-title">${title}</div>
          <br>
          <div class="news-description">${description || content || ""}</div>
          <br>
          <div class="news-author">Author: ${author}</div>
          <div class="news-published">Published At: ${publishedAt}</div>
          <a class="view-button btn mb-2 btn-outline-info" href="${url}">Read more</a>
        </div>
      `;
      container.appendChild(card);
  
      //!  event listener for the delete button in this card
      const deleteBtn = card.querySelector(".close-button");
      deleteBtn.addEventListener("click", () => {
        card.remove();
      });
    }
  };












// const container = document.querySelector(".container");
// const optionsContainer = document.querySelector(".options-container");

// const country = "de";
// const options = [
//   "general",
//   "entertainment",
//   "health",
//   "science",
//   "sports",
//   "technology",
// ];

// // 100 pieces of news per day
// let requestUrl;

// const generateUI = (articles) => {
//   container.innerHTML = "";
//   for (let item of articles) {
//     let card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//       <div class="news-image-container">
//         <img src="${item.urlToImage}" alt="${item.title}">
//       </div>
//       <div class="news-content">
//         <div class="news-title">${item.title}</div>
//         <div class="news-description">${item.description || item.content || ""}</div>
//         <a class="view-button" href="${item.url}">Read more</a>
//       </div>
//     `;
//     container.appendChild(card);
//   }
// };

// const getNews = async () => {
//   try {
//     const response = await fetch(requestUrl);
//     if (!response.ok) {
//       throw new Error("Something went wrong. Please try again.");
//     }
//     const data = await response.json();
//     generateUI(data.articles);
//   } catch (error) {
//     console.error(error);
//     alert(error.message);
//   }
// };

// const createOptions = () => {
//   for (let option of options) {
//     let button = document.createElement("button");
//     button.textContent = option;
//     button.addEventListener("click", () => {
//       requestUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${option}&apiKey=${apiKey}`;
//       getNews();
//     });
//     optionsContainer.appendChild(button);
//   }
// };

// const init = () => {
//   optionsContainer.innerHTML = "";
//   createOptions();
//   getNews();
// };

// window.onload = () => {
//   const apiKey = "3a86dc7bdc254fb38cd93735d62d40d1";
//   requestUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
//   init();
// };
