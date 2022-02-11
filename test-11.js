// Demo : Strings

var sentence = " Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://www.w3schools.com";

// cümle kaç karakterlidir ?
console.log(sentence.length);

// kaç kelimeden oluşuyor ?
console.log(sentence.trim().split(' ').length);

// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase());

// Tüm cümleyi büyük harfe çevirin.
console.log(sentence.toUpperCase());

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim());

// '-' karakterini silin.
console.log(sentence.replace('-',''));

// url'nin içinden str kısmını çıkarınız.
var str = 'http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));