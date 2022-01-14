var num = 15.123456789;

// toplamda 3 basamaklı sayı kullan

val = num.toPrecision(3);

// ondalık kısmı 3 basamakta sınırla

// en yakın sayıya yuvarla

// aşağı yuvarla

// yukarı yuvarla


// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul


// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.


console.log(Math.floor(min+Math.random()*(max-min)))

/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir? */

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas*0.25

console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(2));



