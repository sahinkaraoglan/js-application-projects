//DÖNGÜLER

// let toplam=0;
// for(let i=0;i<10;i++)
// {
//     toplam+=i;
//     console.log(toplam);
// }

// var sayilar=[7,5,6,8,1,2,9,3,7];
// for(var i=0;i<9;i++)
// {
//     console.log(sayilar[i]);
// }


let user={
    "name":"şahin karaoğlan",
    "username":"sahinkaraoglan",
    "password":"12356",
    "email":"infosahinkaraoglan.com"
};
for(let key in user)
{
    console.log(key);
    console.log(user[key]);
}



//DÖNGÜLER UYGULAMALAR
let sayilar = [1,5,7,15,3,25,12,24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
for(let sayi of sayilar)
{
    console.log(sayi*sayi);
}
// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
for(let i=0;i<sayilar.length;i++)
{
    if(sayilar[i]%5==0)
    {
        console.log(sayilar[i]);
    }
}
// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
var toplam=0;
for(let i=0;i<sayilar.length;i++)
{
    if(sayilar[i]%2==0)
    {
        toplam=toplam+sayilar[i];
    }
}
console.log(toplam);

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];
for(let urun of urunler)
{
    console.log(urun.toUpperCase());
}