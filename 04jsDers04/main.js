 /* import { ekle, anlikDeger } from "./islemler.js";


let sonucumuz = ekle(1,2)
console.log("sonucumuzzzz: ", sonucumuz)
console.log("anlikDeger: ", anlikDeger)
*/

//Asynchronous -> ayni anda birden cok islemin yapilmasi senktondur
//islerin sirasi ile yapilmasi ise asenkrondur

//Callback -> parametre olarak fonksiyon gonderme ve gerektigi yerede
//parametre olarak gonderilen fonksiyonun cagirilmasi
/*
function calis1(){
    document.writeln("calis1 calisti" + "</br>")
}

function calis2(aFonk){
    setTimeout(() => {
     document.writeln("calis2 calisti" + "</br>")
     aFonk() // calis1()
    }, 2000);
}

calis2(calis1)


//Promise -> 2 parametre alan bir objedir. then ise o alanin 2 paramtreli fonksyiondan
//geriye doneni yakalar
let benimPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("basarili islem tamamlandi")
    }, 3000);
})

benimPromise.then(function(deger){
    document.writeln("deger: " + deger + "</br>")
})


//Async/Await -> bir fonksyion icinde eger bir veri alinacaksa, beklemek yani await
//gereki bu durumda da o fonksiyona async yazarsin
async function internetteVeriAl() {
    let cevap = await fetch("https://api.nationalize.io/?name=nathaniel")
    console.log(cevap)
    let cevaptakiVeri = await cevap.json()
    console.log(cevaptakiVeri)

}

internetteVeriAl()

*/

//fetch - isternetten isetek atip veri almayi saglar.
//islem sonuclari ise then veya hatalar catch ile alinir
/*
fetch("https://api.nationalize.io/?name=nathaniel")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
*/
//async await ile bir endpoint"e istek atiniz ve gelen json degerini conlose a yaziniz


function kullaniciBilgileriniAl(e) {
    e.preventDefault()

    let kayitFormu = document.forms["girisFormu"]
    console.log(kayitFormu)

    let kadiAlani = kayitFormu["kadi"] //input
    console.log(kadiAlani)

    kadiAlani.style.backgroundColor = "red"
    kadiAlani.style.color = "white"

    let kadiAlaniyazi = kadiAlani.value
    console.log(kadiAlaniyazi)

    let sifreAlani = kayitFormu["sifre"] //input
    sifreAlani.classList.add("sinif1")
    setTimeout(() => {
        sifreAlani.classList.remove("sinif1")
    }, 2000);

    let sifreAlaniYazi = sifreAlani.value
    console.log(sifreAlaniYazi)



    /* 
    Kullanicidan form uzeriden mail ve sifre degerlerini alarak
    eger bunlar elinizdeki mail ve sifre ile aynisi ise console "giris yaptiniz"
    degilse "hatali bilgiler" diye aciklama yazan bir uygulama yapiniz

    */

}

let busraDivElement = document.getElementById("busra")
let sayac = 1

function elemanEkle() {
    console.log("eleman tiklandi")
    busraDivElement.style.backgroundColor = "blue"

    const yeniElement = document.createElement("div")
    yeniElement.classList.add("sinif2")
    yeniElement.innerHTML = sayac + "<b> . eleman </b>"
    sayac = sayac + 1


    yeniElement.addEventListener("click", ()=>{
        yeniElement.remove()
    })

    busraDivElement.appendChild(yeniElement)

}


/* 

Elinizde ekle ve sil adinda 2 button olsun, ekleye tikladikca eleman uretip ekleyen
sil"e tikladikca ise ilgili elemani silen bir kod yaziniz

*/

const div1Element = document.getElementById("div1")
const altdiv1Element = document.getElementById("altdiv1")
const pElementyeni = document.createElement('p')
pElementyeni.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, fuga. Omnis, explicabo! Commodi, perspiciatis voluptate? Incidunt totam earum, nam impedit magnam mollitia exercitationem veritatis quibusdam explicabo cum libero nesciunt eius?"

div1Element.insertBefore(pElementyeni,altdiv1Element)


const altElElementler = document.getElementsByClassName("altEl")

console.log(altElElementler[0].innerHTML)


console.log("window.innerWidth: ", window.innerWidth)
console.log("window.innerWidth: ", window.innerHeight)
console.log("window.location.hostname: ", window.location.hostname)
console.log("window.location.pathname: ", window.location.pathname)

// window.history ile back ve forward yabilir. window.history.go(-2) 2 onceki sayfaya git
//navigator nesnesi uzerinden cookie lere erisip var yok bakabilirsin?
console.log("navigator cookieEnabled : ", navigator.cookieEnabled)
console.log("navigator language : ", navigator.language)


console.log("screen.width: ", screen.width)
console.log("screen.height: ", screen.height)

//Lokasyon Alma

function konumAl() {
    if (navigator.geolocation) { //lokasyon ozelligi var mi?
        navigator.geolocation.getCurrentPosition(konumlariGoster)
    } else {
        console.log("lokasyon ozelligi yok")
    }
}


function konumlariGoster(pozisyon) {
    console.log("pozisyon latitude: ", pozisyon.coords.latitude)
     console.log("pozisyon longitude: ", pozisyon.coords.longitude)
}


//LocalStorage veriler hep kayit edilir sen silene kadar
//sessionStorage da ise oturum bitene kadar kayit edilir

localStorage.setItem("ad","memo")
localStorage.setItem("yas","12")
localStorage.setItem("sifre","123")


console.log(localStorage.length)
// localStorage.clear()
localStorage.removeItem("sifre")
console.log(localStorage.length)


console.log(localStorage.getItem("ad"))

//AJAX - Internetten istek yapmak
function verliAl2() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        console.log(this.responseText)
    }

    xhttp.open("GET","https://api.ipify.org/?format=json", true)
    xhttp.send()

}


//JSON 
 /*
:   "ad":"memocan",
{}  "sinif":{ "ogrenciSayisi":2, "ogrentmenSayisi":2},
[]  "bildiginDiller": ["turkice","kurkce","isvecce","ingilize"]
*/

//
const ad = "memocan"
const sinif = {
    ogrenciSayisi: 2,
    ogrentmenSayisi: 2
}
const bildiginDiller = ["turkice","kurkce","isvecce","ingilize"]


/* 
Mahalle adinda bir json objeniz olsun kisiSayisi, konusulanDiller, herbirhanenin
soyadi ve kisiSayisini belirten bir json objesi hazirlayiniz
*/

//JSON.parse() -> api den alinan json verisini js obje formatina cevirir
const internettenAlinanVeri = JSON.parse('{"ip":"94.234.86.21"}')
console.log(internettenAlinanVeri.ip)

//JSON.stringify() js obje formatini json a cevirir
const bilgiler = {
    ad:"memo",
    yas: 30,
    diller: ["tr","se","en","fr"],
}

const jsonBilgiler = JSON.stringify(bilgiler)
console.log(jsonBilgiler)
