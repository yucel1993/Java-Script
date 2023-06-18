//javascript

const searchInput = document.getElementById('searchText');
const searchBtn = document.getElementById('button');
const cardsDiv = document.querySelector('#cards');
const header = document.querySelector('.navbar-brand');

console.log(cardsDiv);
console.log(searchBtn);
console.log(searchBtn);


searchBtn.addEventListener('click', () => {
    if(searchInput.value){
        console.log(searchInput.value);
        getData(searchInput.value);
        searchInput.value="";
    }else{
    alert("Please fill the search field");
    }
});

async function getData(username){
    console.log(username);
    const url=`https://api.github.com/users/${username}/followers?per_page=100`
    try{
        let res=await fetch(url);
        if(!res.ok){
            throw new Error("Something went wrong");
        }
            const data=await res.json()
            console.log(data);
            data.forEach(element => newEl(element));


    }catch(error){
        console.log(error);
        header.innerText="No user has been found😯";
        cardsDiv.innerHTML="";
    }


}

function newEl(element){
    const { login, avatar_url, html_url } = element;


    cardsDiv.innerHTML+=`<div class="col">
    <div class="card">
    <img src="${avatar_url}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${login}</h5>
        <a class="btn btn-danger" href="${html_url}" target="_blank">Go to the User</a>
    </div>
    </div>
</div>
`


// !Alternative way to do this

// let cardCol = document.createElement("div");
//     cardCol.className = "col";
//     let cardDiv = document.createElement("div");
//     cardDiv.className = "card";
//     let cardImg = document.createElement("img");
//     cardImg.src = avatar_url;
//     cardImg.className = "card-img-top";
//     cardImg.alt = login;
//     let cardBody = document.createElement("div");
//     cardBody.className = "card-body";
//     let cardTitle = document.createElement("h5");
//     cardTitle.className = "card-title";
//     cardTitle.innerText = login;
//     let cardBtn = document.createElement("a");
//     cardBtn.className = "btn btn-dark";
//     cardBtn.innerText = "View Profile";
//     cardBtn.target = "_blank";
//     cardBtn.setAttribute("href", html_url);

//     cardCol.appendChild(cardDiv);
//     cardDiv.appendChild(cardImg);
//     cardDiv.appendChild(cardBody);
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardBtn);

//     cardsDiv.appendChild(cardCol);



}