// Demo : Strings

var sentence = " Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://falovic.com/xxxBize Ulaşın";

// cümle kaç karakterlidir ?

console.log(sentence.length);

// kaç kelimeden oluşuyor ?

console.log(sentence.trim().split(" ").length);

// Tüm cümleyi küçük harfe çevirin.

console.log(sentence.toLowerCase());

// Cümlenin başındaki ve sonundaki boşlukları siliniz.

console.log(sentence.trim());

// '-' karakterini silin.

console.log(sentence.replace("-", ""));

// url'nin içinden str kısmını çıkarınız.

var str = "https://"
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protocol'u kullanmaktadır ? (http,https)

console.log(url.startsWith("http"));
console.log(url.startsWith("https"));

// url, '.com' ifadesini içeriyor mu?

console.log(url.indexOf(".com")); // .indexOf ifadeyi bulursa index numarasını verir, bulamazsa -1 döndürür.
console.log(url.includes(".com")); // .includes ifade sorugular ve true/false değeri döndürür.

// url string ifadesini geçerli bir url olarak düzenleyiniz.

console.log(url
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/x/g,"")
    .replace(/ş/g,"s")
    .replace(/ı/g,"i")
    .replace("http", "https")
);