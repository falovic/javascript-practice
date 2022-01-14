var num = 15.123456789;

// toplamda 3 basamaklı sayı kullan

val = num.toPrecision(3);

// ondalık kısmı 3 basamakta sınırla

val = num.toFixed(3);

// en yakın sayıya yuvarla

val = Math.round(num);

// aşağı yuvarla

val = Math.floor(num);

// yukarı yuvarla

val = Math.ceil(num);

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul

val = Math.min(1, 2, 10, 56, 20);
val = Math.max(1, 2, 10, 56, 20);

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.

// var max;
// var min;

// val = Math.floor(Math.random()*(max-min);

// console.log(Math.floor(min+Math.random()*(max-min)))

console.log(val);

/*
   Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
*/

// Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?

var brüt_maas = 3700;
var brüt_mesai = 10.3;
var mesai_süre = 42;
var toplam_brüt = brüt_maas + (brüt_mesai * mesai_süre);

console.log("toplam brüt:" + toplam_brüt);

// Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?

var toplam_net = toplam_brüt - (toplam_brüt % 25);

console.log("toplam net:" + toplam_net);