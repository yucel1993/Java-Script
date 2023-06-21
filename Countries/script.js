let countries=""

window.onload=function(){
    fetchAllCountries()
    }      
const fetchAllCountries=async ()=>{
        try{
            const res=await fetch("https://restcountries.com/v3.1/all")
            // console.log(res)
            if(!res.ok){
                renderError(`Something went wrong:${res.status}`)
                throw new Error();
                        }
                    const data=await res.json()
            getCountyNames(data)
            }catch (eror){
            console.log(eror)
        }  
};
// // ! All countries names are in the input bar
// function getCountyNames(data){
//    countries=data;
//    countries.forEach(country=>{
//     const select = document.querySelector("#country-name")
//     // console.log(country.name)
//     // console.log(country.name.common)
//     select.innerHTML+=`
//     <option value='${country.name.common}'>${country.name.common}</option>`
//         })
// }

// ! Second the country name soth out version
function getCountyNames(data) {
    countries = data;
  
    // Sort the countries array by country name
    countries.sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  
    // Get the select element
    const select = document.querySelector("#country-name");
    
    // Clear the existing options
    select.innerHTML = "";
  
    // Generate the sorted options
    countries.forEach((country) => {
      select.innerHTML += `
        <option value='${country.name.common}'>${country.name.common}</option>
      `;

    //   !Alternate code without innerHTML
    //   countries.forEach((country) => {
    //     const option = document.createElement("option");
    //     option.value = country.name.common;
    //     option.textContent = country.name.common;
    //     select.appendChild(option);

    });
  }
  



// ! Error catching and DOM manipulation
const renderError=(message)=>{
const countryDiv=document.querySelector(".countries")
    countryDiv.innerHTML=` 
    <h3 class="text-danger">${message}>
  `
}
// ! As you clicked items in the drop menu, write the items info under the section into the dom
document.querySelector("#country-name").addEventListener("click",(e)=>{
    const countryName=e.target.value
    if(countryName){
        const selectedCountry = countries.filter(country=>country.name.common===countryName);
        // Write to the dom selected country here
        renderCountry(selectedCountry[0])
        }
})


//  Wite Dom to the page renderedCountry's INFO

const renderCountry=(country)=>{
    console.log(country)
    const {
        name:{common},
        capital,
        region,
        flags:{svg},
        languages,
        currencies,
        population,
        borders,
        maps,
    }=country
console.log(maps.googleMaps)

const cardDiv=document.querySelector(".countries")
cardDiv.innerHTML=`

<div class="card shadow-lg m-auto" style="width: 22rem">
  <img src="${svg}" class="card-img-top shadow" alt="..." />
  <div >
    <h5 class="p-2 text-center">${common}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${region}
    </li>
    <li class="list-group-item">
      <i class="fas fa-lg fa-landmark"></i>
      <span class="fw-bold"> Capitals:</span> ${capital}
    </li>
    <li class="list-group-item">
      <i class="fas fa-lg fa-comments"></i>
      <span class="fw-bold"> Languages:</span> ${Object.values(languages)}
    </li>
    <li class="list-group-item">
      <i class="fas fa-lg fa-money-bill-wave"></i>
      <span class="fw-bold"> Currencies:</span> ${
        Object.values(currencies)[0].name
      },
      ${Object.values(currencies)[0].symbol}
    </li>
    <li class="list-group-item">
    <i class="fa-solid fa-people-group"></i></i>
    <span class="fw-bold"> Population:</span> ${population.toLocaleString(
      "en-US"
    )}
  </li>
    <li class="list-group-item">
    <i class="fa-sharp fa-solid fa-road-barrier"></i>
    <span class="fw-bold"> Borders:</span>  ${borders ? borders : "None"}
  </li>
  </li>
  <li class="list-group-item">
    <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href=${
      maps.googleMaps
    } target='_blank'> Go to google map</a> </li>
  </ul>
</div>
  `;


}
