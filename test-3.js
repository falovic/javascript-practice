// Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

var date = new Date();

console.log(date);
console.log(date.getDay());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());

// Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

var dateA = new Date(2022, 0, 14, 00, 32);
var dateB = new Date('1/14/2022 00:32');

console.log(dateA);
console.log(dateB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.

var dateC = new Date("1/1/1990");
var domC = dateC.getDate();
dateC.setDate(domC - 1);
console.log(dateC);

// iki tarih arasındaki geçen zamanı bulunuz.

var start = new Date("9/19/1996")
var end = new Date("9/19/1997")

var milisecond = end - start;  // tarihler arasındaki süreyi milisaniye cinsinden yazdırır.
var second = milisecond / 1000 // tarihler arasındaki süreyi saniye cinsinden yazdırır.
var minute = second / 60       // tarihler arasındaki süreyi dakika cinsinden yazdırır.
var hour = minute / 60         // tarihler arasındaki süreyi saat cinsinden yazdırır.
var day = hour / 24            // tarihler arasındaki süreyi gün cinsinden yazdırır.
var mounth = day / 30          // tarihler arasındaki süreyi ay cinsinden yazdırır.
var year = day / 365           // tarihler arasındaki süreyi yıl cinsinden yazdırır.

console.log("milisaniye:" + milisecond);
console.log("saniye:" + second);
console.log("dakika:" + minute);
console.log("saat:" + hour);
console.log("gün:" + day);
console.log("ay:" + mounth.toFixed());
console.log("yıl:" + year);

// Yaş hesaplama nasıl yapılır?

var birthday = new Date("12/15/1998")
var age_ms = Date.now() - birthday.getTime();
var age = new Date(age_ms);

console.log(age.getFullYear() - 1970);

/*
zaman, 01.01.1970 UTC'den bu yana 
ECMAScript'te milisaniye cinsinden ölçülür.
hesap yaparken 1970 çıkarmak gerekir.

var ecma = new Date(null);
console.log("null:" + ecma.getFullYear());
*/

// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır?

var momsday = new Date();
momsday.setHours(0, 0, 0, 0);
momsday.setFullYear(2019);
momsday.setDate(1);
momsday.setMonth(4); // ocak:0 mayıs:4

while (momsday.getDay() != 0) {          // while : iken
    momsday.setDate(momsday.getDate()+1) // momsday 0'a (pazar) eşit olmadığı sürece 1 gün eklemeye devam eder.  
}
momsday.setDate(momsday.getDate()+7); // 2. hafta

console.log(momsday);
