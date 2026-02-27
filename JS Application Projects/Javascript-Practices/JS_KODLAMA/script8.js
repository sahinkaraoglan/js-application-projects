// //FONKSİYONLAR

// // function yasHesapla(dogumYili)
// // {
// //     console.log(new Date().getFullYear()-dogumYili);
// // }
// // yasHesapla(1999);
// // yasHesapla(1974);

// function yasHesapla(dogumYili)
// {
//     return new Date().getFullYear()-dogumYili;
// }
// let yasAhmet=yasHesapla(1999);
// let yasAyse=yasHesapla(1981);
// console.log(yasAhmet,yasAyse);

// function emeklilikHesabı(dogumYili,isim)
// {
//     let yas= yasHesapla(dogumYili);
//     let kalan_sene=65-yas;
//     if(kalan_sene>0)
//     {
//         console.log(`emekli olmanız için ${kalan_sene} yılınız kaldı.`);
//     }
//     else
//     {
//         console.log("zaten emeklisiniz");

//     }
// }




//FONKSİYON UYGULAMALARI
// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function kelimeYazdir(kelime,adet)
{
    for(let i=0;i<adet;i++)
    {
        console.log(kelime);
    }
}
kelimeYazdir(merhaba,8);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function alanCevreHesapla(kısa,uzun)
{
    let alan=kısa*uzun;
    let cevre=((kısa+uzun)*2);
    return `alan: ${alan} cevre:${cevre}`;
}
let sonuc=alanCevreHesapla(7,10);
console.log(sonuc);
