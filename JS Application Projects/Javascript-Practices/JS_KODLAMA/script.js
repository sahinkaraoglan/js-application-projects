//DEĞİŞKENLERİN TANIMLANMASI
var maasAli=5000;
var maasSeda=6000;
var zam=0.4;
let isim="şahin";
let isim2="beren";

console.log(maasAli+(maasAli*zam))//alinin maaşı
console.log(maasSeda+(maasSeda*zam))//sedanın maaşı
//DEĞİŞKENLER ARASINDA BOŞLUK OLMAZ VE TÜRKÇE KARAKTER KULLANMAMALIYIZ.
//DEĞŞKENELER SAYI İLE BAŞLMAZ AMA BİTEBİLİR


//BOOLEAN DEĞİŞKEN TÜRÜ
var sinavNotu=70;
var basarilimi=(sinavNotu>=50);
console.log(basarilimi);
console.log(typeof(basarilimi));


//DEĞİŞKENLER ARASINDA TÜR DÖNÜŞÜMÜ
let sayi1="10";
let sayi2="20";
console.log(Number(sayi1)+Number(sayi2));


//DEĞİŞKEN TİPLERİNİN BELİRLENMESİ
console.log(typeof(maasSeda));
console.log(typeof(isim));


//DEĞİŞKENLER ÜZERİNDE İŞLEMLER
console.log(maasAli+maasSeda);
//STRİNG İŞLEMLER TOPLANDIĞINDA YAN YANA YAZMAN GERÇEKLEŞTİRLİR
console.log(isim+isim2);

//DEĞİŞKENİN TİPİNİN BELİRLENMEMESİ
let yas;
console.log(yas);
console.log(typeof(yas)); //HER İKİ DURUMDA DA UNDEFİNED ÇIKTISI ALINIR ÇÜNKÜ DEĞİŞENİN DEĞERİ YOK


//DATE - TİME İŞLEMLERİ

let simdi=new Date; //şimdiki saat ve tarih
//GET METHODS
let sonuc;
sonuc=simdi.getDate();  //gün bilgisni getirir.
sonuc=simdi.getDay(); //günleri pazardan(0 dan başlayarak)numaralandırı.
sonuc=simdi.getFullYear(); //yıl bilgisni getirir.
sonuc=simdi.getHours(); //saat bilgisni getirir.

//SET METHOD
let dogumTarihi=new Date(1999,10,16);
sonuc=simdi;
sonuc=simdi.getFullYear()-dogumTarihi.getFullYear();


console.log(sonuc);
console.log(typeof sonuc);




