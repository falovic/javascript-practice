// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler

var customerName = 'Fatih';
var customerLastname = 'Şahin';
var customerID = '12345678910';
var total = 205.6;
var customerGender = true; // erkek true, kadın false
var customerAddress = { // object
    country: 'Türkiye',
    city: 'Bursa',
    district: 'Osmangazi',
    body: 'Kırcaali mah. No:10',
}
var customerHobbies = ['Book', 'Music'] // array


// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order1 = Number('100');
var order2 = Number('150');
//
var totalOrder = order1 + order2;
console.log(totalOrder);

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order3 = Number('100.2');
var order4 = Number('150.5');
//
var totalOrder2 = order3 + order4;
console.log(totalOrder2);

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

var order4 = parseInt('100.2');
var order5 = parseInt('150.5');
//
var totalOrder3 = order4 + order5;
console.log(totalOrder3)

// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız.

const yearOfBirth = 1997;
//
console.log(new Date().getFullYear() - yearOfBirth)

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

let title = 'Javascript First Test';
//
console.log(title.length);

