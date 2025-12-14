//DEGISKEN TANIMLAMALARI

document.writeln("memo can </br>")

//ayni isme sahip degisken tanitabilirim ve icerigi degistirebilirim
var ad = "memo"
document.writeln("hosgeldin " + ad + "</br>")

ad = "can"
document.writeln("hosgeldin1 " + ad + "</br>")

//icerik degisebilir ama ayni isme sahip degisken tekrar olusturulama
let yas = 30
yas = 40
document.writeln("yasim " + yas + "</br>")


//sabittir, ayni isimde degisken tekrar olusturamazsin ve degisken icerigi degistirilemez
const ulke = "isvec" 
document.writeln("ulkem " + ulke + "</br>")

var tcNo
document.writeln("tcNomm:  " + tcNo + "</br>")

let tcNo2
document.writeln("tcNo2mm:  " + tcNo2 + "</br>")

/*
const tcNo3
document.writeln("tcNo2mm:  " + tcNo2 + "</br>")
*/


//ARITMETIK OPERATORLER
let sayi1 = 2
let sayi2 = 4

document.writeln("-- -- -- - - -- - - - - - -- - - " + "</br>")
document.writeln("sayi1:  " + sayi1 + "</br>")
document.writeln("sayi2:  " + sayi2 + "</br>")
document.writeln("-- -- -- - - -- - - - - - -- - - " + "</br>")


let toplam = sayi1 + sayi2
document.writeln("toplam:  " + toplam + "</br>")

let cikarma = sayi2 - sayi1
document.writeln("cikarma:  " + cikarma + "</br>")

let carpma = sayi1 * sayi2
document.writeln("carpma:  " + carpma + "</br>")

let bolme = sayi2 / sayi1
document.writeln("bolme:  " + bolme + "</br>")

let modAl = sayi2 % sayi1
document.writeln("modAl:  " + modAl + "</br>")

sayi1++ //kendini bir arttir     sayi1 = sayi1 + 1
document.writeln("sayi1:  " + sayi1 + "</br>")

sayi1-- // sayi1 = sayi1 - 1
document.writeln("sayi1:  " + sayi1 + "</br>")

sayi1*=2 //sayi1 = sayi1 * 2
document.writeln("sayi1:  " + sayi1 + "</br>")

sayi1+=5 // sayi1 = sayi1 + 5
document.writeln("sayi1:  " + sayi1 + "</br>")

sayi1-=3 // sayi1 = sayi1 - 3
document.writeln("sayi1:  " + sayi1 + "</br>")

sayi1/=2 // sayi1 = sayi1 / 2
document.writeln("sayi1:  " + sayi1 + "</br>")


//SARTLAR
let benimYas = 30

document.writeln("-- -- -- - - -- - - - - - -- - - " + "</br>")
document.writeln("benimYas:  " + benimYas + "</br>")
document.writeln("-- -- -- - - -- - - - - - -- - - " + "</br>")

if (benimYas > 20){
document.writeln("ben 20 yasindan buyugum " + "</br>")
}

if (benimYas >= 30) {
    document.writeln("benim yas 30 veya daha buyuktur" + "</br>")
}

if (benimYas < 31 ) {
    document.writeln("benim yas 31'den kucuktur " + "</br>")
}

if (benimYas <= 30 ) {
    document.writeln("benim yas 30 veya 30 dan daha kucuktur" + "</br>")
}

if (benimYas == 30 ) { //deger, 3lu === de ise tipe
    document.writeln("benim tam 30 yasindayim" + "</br>")
}

if (benimYas === "30") {
     document.writeln("benim tam 30 yasindayim 3 esittir" + "</br>")
} else {
    document.writeln("benim tam 30 yasindayim 3 === calismaz" + "</br>")
}

if (benimYas != 31) {
     document.writeln("benim yas 31 degildir" + "</br>")
}

if (benimYas == 28) {
    document.writeln("ben 28 yasindayim" + "</br>")
} else if (benimYas == 30) {
    document.writeln("ben 30 yasindayim" + "</br>")
} else {
  document.writeln("ben ne 28 nede  30 yasindayim" + "</br>")
}

let sinavSonucu = 5 

let gectiMi = sinavSonucu > 45 ? "gecti" : "kaldi"

document.writeln("gectiMi:  " + gectiMi + "</br>")










