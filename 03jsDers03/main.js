 "use strict" //kuralli ve guvenli bir mod ile duzgun sytax"ta yazmamizi saglar
//  { } icinde kullanilar, sadece orda gecerli olur.
//kod adini degisken olarak veremezsin mesela let 
/*
let ad = "memo"
//delete degiskeni siler, ama use strict kullandiginda delete calismaz STRING?
document.writeln("ad: " + ad +"</br>")

let eval1 = "nasilsin" // eval, let, var, const , function,
document.writeln("eval: " + eval1 +"</br>")

//Object Ornegi
const tarih = new Date() //
document.writeln("tarih: " + tarih +"</br>")

document.writeln("tarih getDay: " + tarih.getDay() +"</br>")
tarih.setDate(3)
document.writeln("tarih getDay: " + tarih.getDay() +"</br>")

document.writeln("tarih getDay: " + tarih.getTime() +"</br>") //1970 den beri gece milisaniye


//ARRAY - Dizi
//const bir dizi icerigi degistirilebilinir ama yeniden atama olamaz
const araba = ["volvo","bmw","mercedes","porche","togg"]
// araba = ["kiraz"] 


document.writeln("araba: " + araba +"</br>")
araba[0] = "hunday"
document.writeln("araba 0: " + araba[0] +"</br>")
document.writeln("araba length: " + araba.length +"</br>")

araba.sort() //alfabetik veya sayisal olarak siralar
document.writeln("araba sort(): " + araba +"</br>")

araba.push("saab") // sona ekle
document.writeln("araba: " + araba +"</br>")

araba.pop() //sondan cikar
document.writeln("araba: " + araba +"</br>")

let arabaString = araba.toString() // string/metin e cevir
document.writeln("arabaString: " + arabaString +"</br>")

let araba2 = araba.at(2) //ilgili siradakini getir
document.writeln("araba2: " + araba2 +"</br>")

let arabaIncludes = araba.includes("hunday") // string/metin e cevir
document.writeln("arabaIncludes: " + arabaIncludes +"</br>")

const sayilar = [3,4,6,7,8,1,2] // new Array()
document.writeln("----- -- - - -- - - -- - - -- - - - -: "  +"</br>")
document.writeln("sayilar: " + sayilar +"</br>")
document.writeln("----- -- - - -- - - -- - - -- - - - -: "  +"</br>")


let ilkSayi = sayilar.find(sayilariBul) //sarti saglayan ilk elemani bulur

function sayilariBul(deger, sira, dizi){
    return deger>4
}

document.writeln("ilkSayi: " + ilkSayi +"</br>")
 araba.reverse() //ters cevir diziyi
document.writeln("ilkSayi: " +araba +"</br>")

//foreach - tum elemanlari gezer geriye bir sey cevirmez
let yazimm = ""
sayilar.forEach(elemanGez1)

document.writeln("yazimm: " +yazimm +"</br>")

function elemanGez1(deger) {
    yazimm = yazimm + deger + " merhaba </br>"
}

//map - tum elemanlari gezer ve geriye dizi cevirir ama her donustu bu olay tekrarlanir

const yeniSayilar = sayilar.map(mapYap) // flatMap, her dondugunde dizi olusturma, sadece finalde 1 dizi olusturur
document.writeln("yeniSayilar: " +yeniSayilar +"</br>")


function mapYap(deger) {
    return deger * 2
}

const isimler = ["ali","ahmet","memo","meryem","mert"]
const filtreliIsimler = isimler.filter(filtrelemeYap) //bir fonksiyon uzerinden aranilan sarta gore geriye yeni bir dizi cevir

document.writeln("filtreliIsimler: " +filtreliIsimler +"</br>")


function filtrelemeYap(deger) {
    return deger.includes("mer") //aralina deger string/metinde varsa true yoksa false cevirir
}


const anahtarlar = araba.keys() //bana elemanlarin sirasini, entries ise anahtar, deger  ciftirdir

for (const element of anahtarlar) {
    document.writeln("element: " +element +"</br>")
}

for (const element of araba) {

    document.writeln("element: " +element +"</br>")
}


//SET -> benzersir olarak veri tutar, ayni isimde 1 ekleme olur //WeakSet
const ozelBirimler = new Set(["ali","emre","memo","esra"])
ozelBirimler.add("omer")
ozelBirimler.add("emre")


document.writeln("ozelBirimler: " +ozelBirimler +"</br>")

for (const element of ozelBirimler) {
    document.writeln("element: " +element +"</br>")
}


//MAP -> anahtar deger seklinde tutar /WEAKMAP, Map objesi gibi ama daha az method barindiri

const yeniMeyveler = new Map([
    ["elma",200],
    ["uzum",300]
])
yeniMeyveler.set("mango",400)
yeniMeyveler.set("uzum",600)


for (const element of yeniMeyveler.keys()) {
    document.writeln("element: " +element +"</br>")
}

    document.writeln("element: " +yeniMeyveler.get("elma") +"</br>")
// yeniMeyveler = null
*/
//LOOP
const kisi = {ad: "atlat", soyadi:"can",yas:25}

for (const key in kisi) {
    document.writeln("key: " +kisi[key] +"</br>")
}

//MATH
// debugger
let fiyat = 98.50
document.writeln("fiyat: " +fiyat +"</br>")

let yeniFiyat = Math.round(fiyat)
document.writeln("yeniFiyat: " +yeniFiyat +"</br>")


document.writeln("fiyat: " + (typeof yeniFiyat) +"</br>")

//TRY CATCH
let islem 

try {
    throw "tanimsin bir deger 4 e bolunmez"
    let sonuc = islem /4
    document.writeln("sonuc: " +sonuc +"</br>")

} catch (error) {
        document.writeln("error: " +error +"</br>")

} finally {
        document.writeln("finally calistir: " +"</br>")
}

//EVENT
//bir dinleyici olayinda meela tiklanma, orda ayni zamanda biz dinleyi ekledigimiz,
//ornegin tiklama oldugunda, bize bir obje verir, istersek bunu kullaniriz,
//bu obje icinde o element"e ait tum ozellikleri iceririr
function tiklandik(event){
    console.log("tiklandiiiii")
}

let tikla2Element = document.getElementById("tikla2")

tikla2Element.addEventListener("click",()=>{
    console.log("2. button tiklandi")
})

let tikla3Element = document.getElementById("tikla3")

tikla3Element.onclick = (event) =>{
        console.log(" tikla3Element tiklandi", event)
}

window.onload = () =>{
 console.log("ekran hepsi yuklenildi")
}


/* 
Kullanicidan 2 adet sayi toplayip, bu sayilari ekran topla adli button"a tiklanildiginda
1 fonksiyon araciligi ile toplayip ekrana yazdiran bir uygulama yapiniz

DOMContentLoaded


//belirtilen milisaniye sonra o fonkstionu 1 kere cagirir
setTimeout(() => {
 document.writeln("Ben Calistim: setTimeout " +"</br>")
}, 4000);
*/ 
/* belirtilen milisayine sonra surekli olarak o milisaniye icinde iligili fonksyionu cagirir
setInterval(() => {
    document.writeln("Ben Calistim: setInterval " +"</br>")

}, 2000);
*/
//instance of -> tipi belirtilen gibi ise true yoksa false cevirir
 document.writeln("tipi: " +  (tikla2Element instanceof Object)  +"</br>")


 //THIS icinde bulundugu objeyi temsil eder. Kendisidir
 const bendeniz =  { //Object.create
    ad: "memo",
    soyad: "seyhan",
    tamAdSoyad: function(){
        return this.ad + " " + this.soyad
    }
 }

 let sonuc = bendeniz.tamAdSoyad()

 document.writeln("sonuc: " +  sonuc +"</br>")

 // call , apply, bind

 //OBJECT tanitma 2. yontemi
 function Kisiler(ad, soyad, yas){
    this.ad = ad
    this.soyad = soyad
    this.yasi = yas
    
 }

 let k1 = new Kisiler("memo","can",30)
document.writeln("k1 ad: " +  k1.ad +"</br>")


//Destructuring

const komsu = {
    ad: "azad",
    soyad: "dogan",
    yas: 30,
    lan: "turkce",
    get dil(){ //verilerine geri dondurmek icin kullanilir. Guvenlidir
      return this.lan 
    },
    set dil(yeniDil){ //set ise degistirmek icin kullanilir
        this.lan = yeniDil
    }
}

Object.freeze(komsu) //objeyi degisimini onler
// komsu.ad = "esra"

let {ad, soyad, yas} = komsu

document.writeln(" ad: " +  ad +"</br>")
// komsu.dil = "isvecce" // set kullanidigimiz icin, = kullandigimizda set fonksiyonu, atamayi parametre olarak alir otomatik
document.writeln(" ad: " +  komsu.dil +"</br>")

//obje dondurulmus, ve degistirilmeye karsi ise true yoksa false cevirir
document.writeln(" komsu isFrozen: " +  Object.isFrozen(komsu) +"</br>")

//CLASS
class Araba {

    constructor(ad, yasi) {
        this.ad = ad
        this.yas = yasi
    }

    arabaCalis(){
    document.writeln(this.ad +" aaraba calisiyor: "  +"</br>")
    }


}

let araba = new Araba("porche",2)

document.writeln("  araba ad: " +  araba.ad +"</br>")
araba.arabaCalis()

//MIRAS ALMAK
class BMW extends Araba {
    constructor(ad, yasi, renk) {
        super(ad, yasi)
        this.renk = renk
    }

    arabaDurdur(){
     document.writeln(" aaraba duruyor: "  +"</br>")
    }


    static akilliCalis(){
     document.writeln(" aaraba akilli modda " +"</br>")

    }
}

let bmw = new BMW("bmw",1,"siyah")
bmw.arabaCalis()
BMW.akilliCalis()





