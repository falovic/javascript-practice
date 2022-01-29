// Demo Loops : Sayı Tahmin Oyunu

/*
   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak = 5;
var tahmin;
var sayac = 0;
var sayi = Math.floor((Math.random() * 10) + 1);

console.log(sayi);

while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt('1-10 arasında bir sayı giriniz.'));

    if (sayi == tahmin) {
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`Puanınız: ${100 - (20)*(sayac-1)}`);
        alert(`Tebrikler ${sayac} defada bildiniz. Puanınız: ${100 - (20)*(sayac-1)}`);
        break;
    } else if (sayi > tahmin) {
        console.log('Yukarı');
        alert(`Yukarı ( Kalan hakkınız: ${hak} )`);

    } else {
        console.log('Aşağı');
        alert(`Aşağı ( Kalan hakkınız: ${hak} )`);
    }
    if (hak == 0) {
        console.log('Bilemediniz.')
        alert(`Ahahah bilemediniz. Puanınız: 0`);
    }
}