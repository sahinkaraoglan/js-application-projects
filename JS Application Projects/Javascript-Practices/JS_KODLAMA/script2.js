/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

//CEVAP-1
var isim1="ada bilgi";
var dogumTarihi=2012;
var not1=70;
var not2=70;
var not3=80;

let isim2="yiğit_Bilgili";
let dogum_Tarihi=2012;
let note1=40;
let note2=40;
let note3=50;

//CEVAP-2
var yas1=20;
let yas2=21;

//CEVAP-3
var ortalamaAda=console.log((not1+not2+not3)/3);
let ortalama_Yigit=console.log((note1+note2+note3)/3);

//CEVAP-4
var gecemeAda=73;
let geceme_Yigit=43;
var basariliAda=(gecemeAda>=50);
console.log(basariliAda);
console.log(typeof(basariliAda));
let basarili_Yigit=(geceme_Yigit>=50);
console.log(basarili_Yigit);
console.log(typeof(basarili_Yigit));
