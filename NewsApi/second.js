const allBtns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    getData(e.target.innerText);
  });
});
const getData = async (subject) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${subject}&apiKey=3a86dc7bdc254fb38cd93735d62d40d1`
  );
  const data = await response.json();
  console.log(data.articles);
  renderData(data.articles);
};
const renderData = (data) => {
  container.innerHTML = "";
  for (let item of data) {
    const { title, description, urlToImage, url, author, publishedAt } = item;
    if (!urlToImage) {
      continue;
    }
    let card = document.createElement("div");
    // card.classList.add("card");
    card.innerHTML = `
        <div class="news-image-container m-3">
        <img  class="d-flex-wrap display-wrap" src="${urlToImage}" alt="${title}">
        <br>
        <button class="close-button text-light p-3 mt-2 bg-warning border-0 rounded fs-5">Delete</button>
        </div>
        <div class="news-content">
        <div class="news-title">${title}</div>
        <br>
        <div class="news-description">${description || content || " "}</div>
        <br>
        <div class="news-author">Author: ${author}</div>
        <div class="news-published">Published At: ${publishedAt}</div>
        <a class="view-button btn mb-2 btn-outline-info" href="${url}">Read more</a>
        </div>
        `;
    container.appendChild(card);
    const deleteBtn = card.querySelector(".close-button");
    deleteBtn.addEventListener("click", (e) => {
      card.remove();
    });
  }
};
