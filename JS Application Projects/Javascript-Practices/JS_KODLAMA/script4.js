// // 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
let sayi=45;
if(sayi>10 && sayi<50)
{
    console.log("girilen sayı istenilen aralıkta.")
}
else
{
    console.log("hatalı aralık.")
}



// // 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
var sayi1=56;
if(sayi1>0 && sayi1%2==1)
{
    console.log("girilen sayı pozitif ve tek bir sayıdır.");
}




// // 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)
let x=45;
let y=45;
let z=45;

if(x>y && x>z)
{
    console.log("en büyük sayı x dir.");
}
else if(y>x && y>z)
{
    console.log("en büyük sayı y dir.");
}
else if(z>x && z>y)
{
    console.log("en büyük sayı z dir.");
}
else
{
    console.log("tüm sayılar birbirine eşittir.");
}


// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
var vize1=40;
var vize2=40;
var final=60;

var vize=((vize1+vize2)*0.4);
var finall=(final*0.6);
var ortalama=vize+finall;
console.log(ortalama);