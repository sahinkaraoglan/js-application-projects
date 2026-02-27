//STRİNG METOTLARI
// let kursAdi="Komple Uygulamalı Web Geliştirme Eğitimi";
// let sonuc;
// sonuc=kursAdi.toLocaleLowerCase();  //tüm karakter kücük yapar.
// sonuc=kursAdi.toLocaleUpperCase(); //tüm karakterleri büyük yapar.
// sonuc=kursAdi.length;   //stringdeki karakterlerin sayısını verir.
// sonuc=kursAdi.slice(0,6); //verilen değerler başlangıç ve bitiş değerleri.
// sonuc=kursAdi.replace("Eğitimi","Kursu");//bir string katarını başka bir string katarı ile değiştirir.
// sonuc=kursAdi.split(" ");
// sonuc=kursAdi.includes("Web"); //web kelimesinin olup olmadığına bakar. boolean değer döndürür.
// console.log(sonuc);


//STRİNG UYGULAMALARI
let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?
let respons;
respons=url.length;
console.log(respons);

// 2- kursAdi kaç kelimeden oluşmaktadır
respons=kursAdi.split(" ").length;
console.log(respons);

// 3- url https ile mi başlıyor?
respons=url.includes("https");
console.log(respons);

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("evet var");
} else {
    console.log("hayır yok");
}

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-gelistirme-kursu
kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replace("ş","s").replace("ı","i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);