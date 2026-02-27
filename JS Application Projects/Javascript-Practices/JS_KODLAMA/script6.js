// //DİZİLER
// let urunler=["iphone 12","iphone 13", "iphone 13 pro"];
// let renkler=["gold","rose-gold","space gry"];
// let fiyatlar=[9000,12000,17000];

// // console.log(urunler[2]);
// // console.log(renkler[0]);
// // console.log(fiyatlar[1]);

// // console.log(`${urunler[0]},${renkler[0]},${fiyatlar[0]}`);
// // console.log(`${urunler[1]},${renkler[1]},${fiyatlar[1]}`);
// // console.log(`${urunler[2]},${renkler[2]},${fiyatlar[2]}`);


// // //dizi elemanlarını stringe dönüştürme.
// // sonuc=urunler.toString();


// // //eleman sileme.
// // sonuc=fiyatlar.pop();   //son elemanı siler ve sildiğini ekrana basar.



// // //eleman ekleme
// // sonuc=urunler.push("iphone 14 pro max");


// //iki ve daha fazla diziyi birleştirme.
// let marka1=["lufian","mavi"];
// let marka2=["beyemen","avva"];
// sonuc=marka1.concat(marka2);  //daha fazla birleştirmek istiyorsak parantez içine yaz.

// console.log(sonuc);



//DİZİ UYGULAMALARI
// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
var meyveler=["elma","armut","muz","çilek"];
// 2- Dizi kaç elemanlıdır?
response=meyveler.length;
console.log(response);
// 3- Dizinin ilk ve son elemanı nedir?
console.log("dizinin ilk elemanı: " , meyveler[0]);
console.log("dizinin  son elemanı: ", meyveler[meyveler.length-1]);
//4- Elma dizinin bir elemanımıdır?
if(meyveler[0]=="elma")
{
    console.log("evet dizinin ilk elemanı elmadır.");
}
else
{
    console.log("dizinin ilk elemanı elema değil.");
}
// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
response=meyveler.push("kiraz");
console.log(response);
console.log(meyveler);
//6- Dizinin son 2 elemanını siliniz.
// meyveler.pop();
// meyveler.pop();
// meyveler.splice(meyveler.length-2,2);
// console.log(meyveler);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet  2009 (60,60,70)
    */

let ogrenci1=
[
    "yiğit bilgi",
    2010,
    [70,60,80]
];
let ogrenci2=
[
    "ada bilgi",
    2012,
    [80,80,90]
];
let ogrenci3=
[
    "ahmet karaoğlan",
    2009,
    [60,60,70]
];

let ogrenciler=[ogrenci1,ogrenci2,ogrenci3];


let yigit_yas =  new Date().getFullYear() - ogrenciler[0][2];
let ada_yas =  new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas =  new Date().getFullYear() - ogrenciler[2][2];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_not.toFixed(1), ada_not.toFixed(1), ahmet_not.toFixed(1));