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


// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır?

// Yaş hesaplama nasıl yapılır?
