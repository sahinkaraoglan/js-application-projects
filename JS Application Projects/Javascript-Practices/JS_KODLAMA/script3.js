//STRİNG ÇALIŞMASI
let ad="şahin";
let soyad="karaoğlan";
let yas=22;
let sehir="kayseri";

//let mesaj="benim adım " + ad + " ve soyadım " + soyad + "  dır." + sehir + "de yaşıyorum. Emekliliğe " + (65-yas) + "kaldı.";
//backtick=altgt+, ile yapılır.
let mesaj=`benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yasıyorum. emekliliğe ${65-yas} yılım kaldı.`;
console.log(mesaj);



//KOŞUL İFADELERİ
let username="sahinkaraoglan";
let password="1234";

if(username=="sahinkaraoglan")
{
    if(password=="1234")
    {
        console.log("Başarılı...Giriş gerçekleştirildi.");
    }
    else
    {
        console.log("password hata tespit.")
    }
}
else
{
    console.log("username hata tespit.");
}