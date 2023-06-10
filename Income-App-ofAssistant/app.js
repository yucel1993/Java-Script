
// !Selectors
const ekleFormu=document.querySelector("#ekle-formu");
const gelirInput=document.getElementById("gelir-input");
const ekleBtn=document.getElementById("ekle-btn");






// ?gelir-gider-sonuc 
const gelirinizTd=document.getElementById("geliriniz");
const giderinizTd=document.getElementById("gideriniz")
const kalanTd=document.getElementById("kalan")



let gelirler=0;


// ?Events
ekleFormu.addEventListener("submit",(e)=>{
e.preventDefault()
gelirler= Number(gelirler)+Number(gelirInput.value);
hesaplaVeGuncelle()
localStorage.setItem("gelirler",gelirler);
ekleFormu.reset()
})


window.addEventListener("load",()=>{
  gelirler=Number(localStorage.getItem("gelirler"));
  tarihInput.valuAsDate=new Date()
  harcamaListesi=JSON.parse(localStorage.getItem("harcamaListesi"))
  hesaplaVeGuncelle()
})

const hesaplaVeGuncelle=()=>{
    const totalGider=harcamaListesi.reduce((toplam,harcama)=>toplam+Number(harcama.miktar),0)

    gelirinizTd.innerText=gelirler;
    giderinizTd.innerText=totalGider
    kalanTd.innerText=gelirler-totalGider
}



//? harcama formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")


let harcamaListesi=[]

harcamaFormu.addEventListener("submit",(e)=>{
e.preventDefault()

const yeniHarcama={
    id:new Date().getTime(),
    tarih:tarihInput.value,
    alan:harcamaAlaniInput.value,
    miktar:miktarInput.value,
}
harcamaListesi.push(yeniHarcama)
localStorage.setItem("harcamaListesi",JSON.stringify(harcamaListesi))

harcamayiDomaYaz(yeniHarcama)

hesaplaVeGuncelle()
harcamaFormu.reset()

})

 
const harcamaBody=document.getElementById("harcama-body")
const harcamayiDomaYaz=({id,miktar,tarih,alan})=>{
    harcamaBody.innerHTML+=`
    
<tr>
    <td>${tarih}</td>
    <td>${alan}</td>
    <td>${miktar}</td>
    <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>  
 </tr>  
    `

}


//! Harcama tablosunda herhangi bir alana tiklanildiginda calisir.
harcamaBody.addEventListener("click", (e) => {
    // console.log(e.target)
  
    //? Tiklama sil butonlarindan geldi ise
    if (e.target.classList.contains("fa-trash-can")) {
      //? DOM'dan ilgili row'u sildik.
      e.target.parentElement.parentElement.remove()
  
      const id = e.target.id
      console.log(id)
  
      //? Dizideki ilgili objeyi sildik.
      harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id)
  
      //? Silinmis yeni diziyi Local Storage aktardik.
      localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
  
      //? her satir silindikten sonra yeni degerleri hesapla ve DOM'a yaz
      hesaplaVeGuncelle()
    }
  })