// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

var car = ["Bmw","Mercedes","Opel","Mazda"]; 
console.log(car);

/* 
var car = new Array("Bmw","Mercedes","Opel","Mazda")
console.log(car);
*/

// Dizi kaç elemanlıdır ?

console.log(car.length);

// Dizinin ilk ve son elemanı nedir ?

console.log(car[0]);
console.log(car[3]);
console.log(car[car.length - 1]);

// "Renault" değerini dizinin sonuna ekleyin.

car.push("Renault");

// "Toyota" değerini dizinin başına ekleyin.

car.unshift("Toyota");

// "Seat" değerini siliniz.



// "Toyota" değerini siliniz.

car.shift();

// Dizi elemanlarını ters çevirin

car.reverse();

// Dizi elemanlarını alfabetik olarak sıralayın.

car.sort();

console.log(car);

// [1,2,5,80] dizisini sıralayın.

var nmb = [1,2,5,80];
console.log(nmb.sort());

// "Opel" değeri dizinin bir elemanımıdır ?

console.log(car.includes("Opel"));

// aşağıdaki ifadeyi diziye çeviriniz.

var str = "Chevrolet,Dacia";
var car2 = str.split(",")
console.log(car2);

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.

var car3 = car.concat(car2);
console.log(car3);

// Oluşturulan diziden son 2 elemanı siliniz.

var car4 = car3.length - 1;
console.log(car4);
console.log(car3.splice(6,2));

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998
*/



