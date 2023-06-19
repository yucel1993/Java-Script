

// window.onload=function(){
//     getData()
// }

const country=""
const myform  =document.querySelector("#form")
const input=document.querySelector("#input-alani")
myform.addEventListener("submit",(e)=>{
e.preventDefault();
const country=input.value;
console.log(country)
getData(country)
input.value="";

})

const getData=async(country)=>{

    const APIKEY="c318e7277211e47858169a9ae63c3263";
    const q=country;
    const units="metric"

const URL=`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${APIKEY}&units=${units}`
    try {
            
        const res=await fetch(URL)
        if(!res.ok){
        throw new Error(res.statusText)
        }
        const data=await res.json()
        console.log(data)
        render(data)
    } catch (error) {
        confirm(error)
    }
}

const render = (data) => {
    const city = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const icon = data.weather[0].icon;
    const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const date = new Date(data.dt * 1000).toLocaleDateString("en-US");
    const container = document.querySelector(".container");
  
    // Create the HTML structure for the weather card
    const cardContent = `
      <div class="card">
        <div class="card-header">
          <h2>${city}, ${country}</h2>
          <p>${date}</p>
        </div>
        <div class="card-body">
          <img src="${img}" alt="Weather Icon">
          <h3>${temp}°C</h3>
          <p>Humidity: ${humidity}%</p>
          <p>Wind: ${wind} m/s</p>
        </div>
      </div>
    `;
  
    // Set the HTML content for the weather card
    container.innerHTML = cardContent;
  };
  