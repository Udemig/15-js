/* Prompt , her zaman string/metin olarak veriyi alir, gerekli ise tur degisimi yapmaniz lazim
let alinanVeri = prompt("adinizi giriniz")
console.log(alinanVeri)


let alinanSayi = Number(prompt("yasini gir")) // 30 + 3     303
console.log(alinanSayi)

let toplam = alinanSayi + 3
console.log(toplam)
*/

// kullanicidan alinan 2 adet sayinin toplayarak, conlosa basiniz sonucu

// kullanicidan alinan sayinin tek mi yoksa cift oldugunu bulup consola yazan bir uygulama yapiniz

/* 
Kullanicidan once hangi islemi yapmasini istedigini sorup, sonra girilen 2 adet sayinin
o islem icinde yapilip sonucu consola yazilan bir uygulama yapiniz
*/

//Random 0 - 1 arasinda uretir. Int ya
let uretilenSayi = Math.floor(Math.random()*100)
console.log(uretilenSayi)

/* 
Bir sayi tahmin oyunu oynayacaksiniz. Kullanicin girdigi sayi ile, makinanin
urettigi sayi ayni ise consola "kazandiniz", degilse "kaybettiniz yazan" bir
uygulama yapiniz
*/

//SWITCH CASE

let gun = 7

switch (gun) {
    case 0:
    document.writeln("pazar </br>")
    break;
    case 1:
    document.writeln("pazartesi </br>")
    break;
    case 2:
    document.writeln("sali </br>")
    break;
    case 3:
    document.writeln("carsamba </br>")
    break;
    case 4:
    document.writeln("persembe </br>")
    break;
    case 5:
    document.writeln("cuma </br>")
    break;
    case 6:
    document.writeln("cumartesi </br>")
    break;
    default:
    document.writeln("bilinmeyen gun </br>")
    break;
}

/*
let havaYagmurluMu = true  // false

if (havaYagmurluMu == true) {
    document.writeln("yagis var  </br>")
}

let sonuc  = document.writeln(Number(true) + "  </br>")
let sayi1 = 10
let sayi2 = 20

document.writeln("-- --- - - -- - - - -- - - - -- - -  </br>")
document.writeln("sayi1: " + sayi1  + "  </br>")
document.writeln("sayi2: " + sayi2 + "  </br>")
document.writeln("-- --- - - -- - - - -- - - - -- - -  </br>")


if (sayi1 == 10 && sayi2 == 20) {
    document.writeln("sayi1 10 dur ve sayi2 20 dir  </br>")
}

if (sayi1 == 10 || sayi2 == 30) {
    document.writeln("sayi1 10 dur veya sayi2 30 dir  </br>")
}
//??

let ad = null
let yazi = "unutuldu"

let sonuc1 = ad ?? yazi

document.writeln("sonuc1: " + sonuc1 + "  </br>")

//LOOP - DONGULER

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue //sona atla
    }
    if (i==7) {
        break // donguyu kir
    }
    document.writeln("Merhaba : " + i + "  </br>")
}

Kullanicidan alinan 2 adet sayi arasindaki sayilari ekrana
yazdiran bir uygula yaziniz


let yeniSayi = 10
while (yeniSayi>0) {
    document.writeln("Selam : " + yeniSayi + "  </br>")
    yeniSayi--
}

let sayimiz = 5


do {
document.writeln("doWhile : " + sayimiz + "  </br>") 
sayimiz--
} while (sayimiz > 0);

for (let a = 0; a < 5; a++) {
   for (let b = 0; b <= a; b++) {
    document.writeln("a : " + a  + " b: " + b + "  </br>") 
   }
}

*/
//STRING
// alert("merhaba\t ben\n bir uyariyim")

let adSoyadTanimala = "Methaba benim ad 'memo' dur. Ya snein nedir?"
document.writeln("adSoyadTanimala : " + adSoyadTanimala + "  </br>") 

let soyad = String("seyhan")
document.writeln("soyad : " + soyad + "  </br>") 

let yeniAd = "memocan"
let yeniAdYazi = `benim adim ${yeniAd} ya senin?`
document.writeln("yeniAdYazi : " + yeniAdYazi + "  </br>") 

let yeniAdYaziLenght = yeniAdYazi.length // toplam uzunluk
document.writeln("yeniAdYaziLenght : " + yeniAdYaziLenght + "  </br>") 

let yazi1 = "merhaba"
let yazi2= "nasilsin"

let yazi3Concat = yazi1.concat(" "+ yazi2) //birlestirme yapar
document.writeln("yazi3Concat : " + yazi3Concat + "  </br>") 

let meyveler = "uzum, muz, elma, ARMUT, zencefil, kivi, elma"
let parcaMeryveSlice = meyveler.slice(5,15) //belirtilen araligi alir ama sadece baslangi belirtilirse sona kadar alir
document.writeln("parcaMeryveSlice : " + parcaMeryveSlice + "  </br>") 

let parcaMeryveSubstring = meyveler.substring(5,15) //belirtilen araligi alir ama sadece baslangi belirtilirse sona kadar alir
document.writeln("parcaMeryveSubstring : " + parcaMeryveSubstring + "  </br>") 

let meyvelerLowerCase = meyveler.toLowerCase() //hepsini kucult
document.writeln("meyvelerLowerCase : " + meyvelerLowerCase + "  </br>") 
let meyvelerUpperCase = meyveler.toUpperCase() //hepsini kucult

document.writeln("meyvelerUpperCase : " + meyvelerUpperCase + "  </br>") 

let meyvelerIndexOf = meyveler.lastIndexOf("el") //sirasini varsa o  yoksa -1

document.writeln("meyvelerIndexOf : " + meyvelerIndexOf + "  </br>") 


//NUMBER
let yasim = 30.2352352
let yasimInt = parseInt("20") // string i tam sayiya cevirir
document.writeln("yasimInt : " + yasimInt + "  </br>")  //

document.writeln("isInteger : " + Number.isInteger(yasim) + "  </br>")  //bu tam sayi mi?

document.writeln("isNaN : " + Number.isNaN(40) + "  </br>")  //bu bir sayi degilmi

//FONKSIYONLAR
function adimiYaz() {
    document.writeln("Benim adim memo "+ "  </br>")  //
}


adimiYaz()

function adYaz2(ad){
    document.writeln("benim ad : " + ad + "  </br>")  //
}

adYaz2("memocan")

function sayilariTopla(sayi1, sayi2) {
    let toplam = sayi1 + sayi2
    return toplam
    //burda yazilanlar calismaz
}

let sayiSonuc = sayilariTopla(3,5)
document.writeln("sayiSonuc : " + sayiSonuc + "  </br>")  //

/* 
1- Kurllanici sayi tahmin oyunu otnuyor. Kullanicinin 3 hakki vardir, 
Eger makinanin urettigi sayi ile kullanicinin girdigi sayi ayni ise ekrana
"kazandiniz" fakat 3 hakkinida doldurup hala bilemediyse ekrana "kaybettiniz"
yazan bir uygulama yapiniz


let hak = 1
let mSayi = Math.floor(Math.random()*100)
console.log("mSayi : " + mSayi)  //

function sayiTahminEt(){
    let oSayi = Number(prompt("sayi tahminin nedir?"))
    
    if (mSayi == oSayi) {
        console.log("bildiniz, kazandiniz")
    } else if (hak == 3) {
        console.log("kaybettiniz")
    } else {
        hak++
        sayiTahminEt()
    }
}

sayiTahminEt()*/

//Arrow function

function hesapla1(a,b) {
let toplam= a+b
return toplam
     
}

const hesapla = (a,b) => {
let toplam= a+b
return toplam
}

let sonucuYaz = hesapla(4,5)

document.writeln("sonucuYaz : " + sonucuYaz + "  </br>")  //


let hesapla2 = sayi => sayi*3

document.writeln("hesapla2 : " + hesapla2(5) + "  </br>")  //

//OBJECT - NESNE
const araba = {
    ad:"Porche",
    yil: 2022,
    renk:"siyah",
    calistir: function(){
        document.writeln("Araba calisiyour : "  + "  </br>")  //
    },
    durdur: function(){
        document.writeln("Araba duruyor : "  + "  </br>")  //
    }
}
araba.ad = "BMW"
document.writeln("araba ad : " + araba.ad + "  </br>")  //
document.writeln("araba ad : " + araba["ad"] + "  </br>")  //

araba.calistir()




